import React, { useEffect, useState } from "react";

type CustomerData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  birthday: string;
  email: string;
};
type Props = {
  initialData?: CustomerData;
  onSubmit: (formData: CustomerData) => void;
  submitLabel?: string;
};
export default function CustomerForm({
  initialData,
  onSubmit,
  submitLabel = "Lưu",
}: Props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    birthday: "",
    email: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof CustomerData, string>>
  >({});
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);
   const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     if (!validateForm()) return;

    try {
      setIsSubmitting(true); // ✅ disable trước khi gửi
      await onSubmit(formData); // 🔁 giả định async
    } finally {
      setIsSubmitting(false); // ✅ bật lại sau khi xong
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "Họ không được để trống";
    if (!formData.lastName.trim())
      newErrors.lastName = "Tên không được để trống";

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "SĐT không được để trống";
    } else if (!/^\d{9,11}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "SĐT không hợp lệ (chỉ chứa số, 9-11 chữ số)";
    }

    if (!formData.address.trim())
      newErrors.address = "Địa chỉ không được để trống";

    if (!formData.birthday.trim())
      newErrors.birthday = "Ngày sinh không được để trống";

    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return (
    <div className="max-w-sm mx-auto bg-white rounded shadow p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Họ", name: "firstName", type: "text" },
          { label: "Tên", name: "lastName", type: "text" },
          { label: "Số điện thoại", name: "phoneNumber", type: "tel" },
          { label: "Địa chỉ", name: "address", type: "text" },
          { label: "Ngày sinh", name: "birthday", type: "date" },
          { label: "Email", name: "email", type: "email" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name as keyof CustomerData]}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400 ${
                errors[name as keyof CustomerData] ? "border-red-500" : ""
              }`}
            />
            {errors[name as keyof CustomerData] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[name as keyof CustomerData]}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-2 rounded 
                      hover:bg-blue-700 active:scale-95 transform transition duration-100
                      ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Đang xử lý..." : submitLabel}
        </button>
      </form>
    </div>
  );
}
