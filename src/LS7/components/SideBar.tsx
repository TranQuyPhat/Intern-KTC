import React, { useEffect, useState } from "react";

type Props = {
  onCategoryChange: (id: number | null) => void;
};
interface Category {
  id: number;
  name: string;
  image: string;
}
export default function SideBar({ onCategoryChange }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch("https://api.escuelajs.co/api/v1/categories")
        .then((response) => response.json())
        .then(setCategories)
        .catch((error) => console.error("Error fetching data:", error));
    };
    fetchData();
  }, []);
  const handleClick = (id: number | null) => {
    setSelectedId(id);
    onCategoryChange(id);
  };
  return (
    <div>
      <aside className="w-64 bg-gray-200 p-4 flex flex-col ">
        <span className="text-3xl font-bold p-2 m-2 py-4">Bộ lọc</span>
        <div>
          <nav>
            <ul className="space-y-2">
              <li>
                <label
                  className={`block p-3 rounded-xl cursor-pointer ${
                    selectedId === null
                      ? "bg-orange-400 text-white"
                      : "hover:bg-orange-100"
                  }`}
                  onClick={() => handleClick(null)}
                >
                  Tất cả
                </label>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <label
                    className={`block p-3 rounded-xl cursor-pointer ${
                      selectedId === category.id
                        ? "bg-orange-400 text-white"
                        : "hover:bg-orange-100"
                    }`}
                    onClick={() => handleClick(category.id)}
                  >
                    {category.name}
                  </label>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}
