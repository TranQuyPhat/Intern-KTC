import React, { useEffect, useState } from "react";
// import "../../index.css";
import Create from "./Create";
import Delete from "./Delete";
import Update from "./Update";
type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  address: string;
  birthday: Date;
  email: string;
};

export default function List() {
  const [Customers, setCustomers] = useState<Customer[]>([]);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [error, setError] = useState<string | null>(null);
  const url = "https://64130fa53b710647375e06ee.mockapi.io/user";
  const fetchCustomer = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCustomers(data);
    } catch (err: any) {
      setError(err.message || "Lỗi không xác định");
    }
  };
  useEffect(() => {
    fetchCustomer();
  }, []);

  if (error)
    return <p className="text-red-500 text-center font-semibold">{error}</p>;
  if (Customers.length === 0) return <p className="text-center">Đang tải...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <Create onSuccess={fetchCustomer} />
      {editingCustomer && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden bg-black/50"
          onClick={() => setEditingCustomer(null)}
          aria-hidden="true"
        >
          <div
            className="relative p-4 w-full max-w-2xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-lg ">
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                  Cập nhật khách hàng
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingCustomer(null)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4 space-y-4">
                <Update
                  customer={editingCustomer}
                  onSuccess={() => {
                    fetchCustomer();
                    setEditingCustomer(null);
                  }}
                  onCancel={() => setEditingCustomer(null)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 text-center">
        Danh sách sản phẩm
      </h2>
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-left">
            <tr>
              <th className="py-3 px-4 border-b">First Name</th>
              <th className="py-3 px-4 border-b">Last Name</th>
              <th className="py-3 px-4 border-b">Phone</th>
              <th className="py-3 px-4 border-b">Address</th>
              <th className="py-3 px-4 border-b">Birthday</th>
              <th className="py-3 px-4 border-b">Email</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {Customers.map((Customer) => (
              <tr
                key={Customer.id}
                className="hover:bg-gray-200 transition duration-150"
              >
                <td className="py-2 px-4 border-b font-medium">
                  {Customer.firstName}
                </td>
                <td className="py-2 px-4 border-b text-green-600 font-semibold">
                  {Customer.lastName}
                </td>
                <td className="py-2 px-4 border-b">{Customer.phoneNumber}</td>
                <td className="py-2 px-4 border-b ">{Customer.address}</td>
                <td className="py-2 px-4 border-b ">
                  {new Date(Customer.birthday).toLocaleDateString("vi-VN")}
                </td>
                <td className="py-2 px-4 border-b ">{Customer.email}</td>
                <td className="py-2 px-4 border-b ">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    onClick={() => setEditingCustomer(Customer)}
                  >
                    Update
                  </button>
                  <Delete
                    id={Customer.id}
                    onDeleteSuccess={(id) => {
                      setCustomers((prev) =>
                        prev.filter((cus) => cus.id !== id)
                      );
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
