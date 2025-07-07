import React, { useState } from "react";
import CustomerForm from "./CustomerForm";
type Props = {
  onSuccess: () => void;
};

export default function Create({ onSuccess }: Props) {
  const handelCreate = async (formData: any) => {
    try {
      const response = await fetch("https://server.aptech.io/online-shop/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Tạo thất bại");

      alert("Tạo thành công!");
      onSuccess();
    } catch (error) {
      alert("Có lỗi xảy ra khi tạo!");
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Tạo khách hàng mới
      </h2>
      <CustomerForm onSubmit={handelCreate} submitLabel="Tạo khách hàng" />
    </div>
  );
}
