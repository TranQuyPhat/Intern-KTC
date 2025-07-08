import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../type";
import SkeletonCard from "./Loading";

const PRODUCTS_PER_PAGE = 4;

type Props = {
  categoryId?: number | null;
};

export default function Container({ categoryId }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProduct, setTotalProduct] = useState(0);
  const [loading, setLoading] = useState(false);

  // Cập nhật lại page khi đổi category
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;

        let url = "";
        if (categoryId) {
          // lấy sản phẩm theo category
          url = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
        } else {
          // lấy toàn bộ sản phẩm
          url = `https://api.escuelajs.co/api/v1/products?offset=0&limit=100`; // lấy toàn bộ để lọc client-side
        }

        const res = await fetch(url);
        const data = await res.json();

        const start = offset;
        const end = offset + PRODUCTS_PER_PAGE;

        const paginated = categoryId
          ? data.slice(start, end)
          : data.slice(start, end);

        setProducts(paginated);
        setTotalProduct(data.length);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, currentPage]);

  const totalPages = Math.ceil(totalProduct / PRODUCTS_PER_PAGE);

  return (
    <div className="w-full">
  <main className="w-full flex-2 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
   
        {loading
          ? Array.from({ length: PRODUCTS_PER_PAGE }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </main>

      {/* pagination */}
      <div className="flex justify-center mt-6 gap-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded border text-sm transition ${
              currentPage === page
                ? "bg-orange-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
