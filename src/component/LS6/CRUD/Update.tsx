import React from "react";
import CustomerForm from "./CustomerForm";
import { Alert } from "antd";
type Props = {
  customer: Customer;
  onSuccess: () => void;
  onCancel: () => void;
};
type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  address: string;
  birthday: Date;
  email: string;
};
export default function Update({ customer, onSuccess,onCancel }) {
  const handleUpdate = async (formData) => {
    try {
      const response = await fetch(
        `https://64130fa53b710647375e06ee.mockapi.io/user/${customer.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error("lỗi");
      alert("Cập nhật thành công");
      onSuccess();
    } catch (error) {
      alert("Lỗi khi cập nhật");
    }
  };
  return (
    <div>
      <CustomerForm
        initialData={customer}
        onSubmit={handleUpdate}
        submitLabel="Cập nhật"
      />
  
    </div>
  );
}
