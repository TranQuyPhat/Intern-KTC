import React from "react";

type Props = { id: number | string;
  onDeleteSuccess: (id: number | string) => void;};

export default function Delete({ id, onDeleteSuccess }: Props) {
   const handleDelete =async (id: number | string)=>{
      const confirm = window.confirm("Bạn có chắc muốn xoá khách hàng này?");
     if (!confirm) return;
     try {
       const response = await fetch(`https://64130fa53b710647375e06ee.mockapi.io/user/${id}`,{
         method:"DELETE"
       })
       if(!response.ok){
         throw new Error("Xoá thất bại")
       }
       console.log("Xoá thành công!");
       onDeleteSuccess(id);
     } catch (error) {
       console.error("Lỗi xoá:", error);
       alert("Xoá thất bại!");
     }
   }  
  return (
    <button className="w-5/12 m-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" onClick={() => handleDelete(id)}>
      Delete
    </button>
  );
}
