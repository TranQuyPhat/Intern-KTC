import React from "react";
import Question from "./OneChoiceQuestion/index.js";
import Card from "./HWLS4/render-list-03/Card.js";
import Card2 from "./HWLS4/render-list-04/Card2.js";
import Card3 from "./HWLS4/render-list-05/Card3.js";
import CountdownTimer from "./HWLS4/render-list-05/CountdownTimer.js";
import ColorSelector from "./HWLS4/state1/ColorSelector.js";
import StarRating from "./HWLS4/state2/StarRating.js";
import ProductCard from "./HWLS4/state3/RemoveProduct.js";
import RemoveProduct from "./HWLS4/state3/RemoveProduct.js";
import { useState } from "react";
import LiftingStateUp from "./HWLS5/LiftingStateUp.js";
import { UserProvider } from "./HWLS5/context/UserContext.js";
import UserInfor from "./HWLS5/context/UserInfor.js";
import ButtonClickCounter from "./HWLS5/Practices/ButtonClickCounter.js";
import InputFieldTracker from "./HWLS5/Practices/InputFieldTracker.js";
import ExerciseSummary from "./HWLS5/Practices/index.js";
import Lession6 from "./LS6/index.js";
import Customer from "./LS6/CRUD/index.js";
// import SPADataRouting from "./LS7/SPADataRouting.js";
// import SpaExample from "./LS7/SpaExample.js";
import LS7 from "./LS7/index.js";
import LS9 from "./LS9/index.js";
import BT1 from "./LS9/BT1/index.js";
import { BrowserRouter, Route, Routes } from "react-router";
const mockNewsData = [
  {
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
    title: "Ấn tượng đầu tiên Samsung Galaxy A32 4G",
    description: "Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz",
    view: 140,
  },
  {
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus-256gb_3.png",
    title: "Google Pixel 5a dự kiến ra mắt cùng Android 12",
    description:
      "Google Pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12",
    view: 127,
  },
  {
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
    title: "Galaxy A52 4G lộ diện trên Google Play Console",
    description: "Xác nhận dùng chip Snapdragon 720",
    view: 55,
  },
  {
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro.png",
    title: "Galaxy A82 5G chuẩn bị ra mắt với chip flagship",
    description: "Màn hình trượt độc đáo, Samfans gom lúa đi là vừa",
    view: 55,
  },
];

const data2 = [
  {
    image: "/public/airpod-3.png",
    title: "Ấn tượng đầu tiên Samsung Galaxy A32 4G",
    price: 140,
    originalPrice: 6000000,
  },
  {
    image: "/public/Apple-USBC-To-SDCard-A.jpg",
    title: "Ấn tượng đầu tiên Samsung Galaxy A32 4G",
    price: 140,
    originalPrice: 6000000,
    discountPercent: 10,
  },
  {
    image: "/public/cap-lightning-to-usb-cable-md818zma-1.jpg",
    title: "Ấn tượng đầu tiên Samsung Galaxy A32 4G",
    price: 140,
  },
  {
    image: "/public/type-c-20-w.png",
    title: "Ấn tượng đầu tiên Samsung Galaxy A32 4G",
    price: 140,
  },
];
const data3 = [
  {
    image: "/public/airpod-3.png",
    shop: "YOUNG SHOP",
    price: 96000,
    originalPrice: 85000,
    discountPercent: 18,
    title: "Edifier Powered Bookshelf Speakers",
    rating: 4,
    sold: 15,
    topRightDiscount: 13,
  },
  {
    image: "/public/airpod-3.png",

    shop: "DIGITAL STORE",
    price: 14000,
    originalPrice: 16000,
    discountPercent: 12,
    title: "Samsung Galaxy A32 4G",
    rating: 5,
    sold: 28,
    topRightDiscount: 10,
  },
  {
    image: "/public/airpod-3.png",

    shop: "CABLE HUB",
    price: 9000,
    originalPrice: 12000,
    discountPercent: 25,
    title: "Fast Charging Type-C Cable",
    rating: 4,
    sold: 88,
    topRightDiscount: 15,
  },
  {
    image: "/public/airpod-3.png",

    shop: "LAPTOP WORLD",
    price: 79900,
    originalPrice: 89900,
    discountPercent: 11,
    title: "ASUS VivoBook 15",
    rating: 4,
    sold: 5,
    topRightDiscount: 13,
  },
];
  
const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 2); // 2 giờ từ bây giờ
const handleColorChange = (color) => {
  console.log("Màu được chọn:", color);
};
const handleRating = (rating) => {
  console.log("Người dùng đã đánh giá:", rating);
};
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "vivo Y18 8GB/128GB",
      price: 4410000,
      urlImage: "/airpod-3.png", // ảnh nằm trong thư mục public
    },
    {
      id: 2,
      name: "vivo Y18 8GB/128GB",
      price: 4410000,
      urlImage: "/airpod-3.png",
    },
    {
      id: 3,
      name: "vivo Y18 8GB/128GB",
      price: 4410000,
      urlImage: "/airpod-3.png",
    },
    {
      id: 4,
      name: "vivo Y18 8GB/128GB",
      price: 4410000,
      urlImage: "/airpod-3.png",
    },
    {
      id: 5,
      name: "vivo Y18 8GB/128GB",
      price: 4410000,
      urlImage: "/airpod-3.png",
    },
  ]);
  
 const handleRemove = (idToRemove) => {
    setProducts((prev) => prev.filter((p) => p.id !== idToRemove));
  };
  return (
    // <div>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //     }}
    //   >
    //     <h2>TIN MỚI</h2>
    //     <span>Xem thêm</span>
    //   </div>

    //   <div
    //     style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}
    //   >
    //     {mockNewsData.map((item, index) => (
    //       <Card key={index} {...item} />
    //     ))}
    //   </div>
    //   <h1
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "left",
    //     }}
    //   >
    //     Phụ kiện tương thích
    //   </h1>

    //   <div
    //     style={{
    //       display: "flex",
    //       marginTop: "20px",
    //       width: "100%",
    //       flexWrap: "wrap",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     {data2.map((item, index) => (
    //       <Card2 key={index} {...item} />
    //     ))}
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //       marginTop: "40px",
    //     }}
    //   >
    //     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    //       <h1>Deal of the day</h1>
    //       <CountdownTimer endTime={targetDate} label="Flash Sale còn:" />
    //     </div>

    //     <span>View all</span>
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       marginTop: "20px",
    //       width: "100%",
    //       flexWrap: "wrap",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     {data3.map((item, index) => (
    //       <Card3 key={index} {...item} />
    //     ))}
    //   </div>

    //   <div>
    //     <h2>Chọn màu sắc:</h2>
    //     <ColorSelector
    //       colors={["Đen", "Hồng", "Xanh"]}
    //       defaultColor="Đen"
    //       label="Màu:"
    //       onColorChange={handleColorChange}
    //     />
    //   </div>

    //   <div>
    //     <h3>Đánh giá sản phẩm:</h3>
    //     <StarRating onRate={handleRating} />
    //   </div>

    //   <div style={{ display: "flex",justifyContent: "center", gap: "20px" }}>
    //    {products.map((product) => (
    //        <RemoveProduct
    //       key={product.id}
    //       name={product.name}
    //       price={product.price}
    //       urlImage={product.urlImage}
    //       onRemove={() => handleRemove(product.id)}
    //     />
    //   ))}
    //   </div>
       
    // </div>
    // <div>
    //   <LiftingStateUp />
    // </div>
    // <UserProvider>
    //   <UserInfor/>
    // </UserProvider>
    // <div>
  // <ExerciseSummary />
  // <Lession6/>
  //   <Customer/>
  //   <SPADataRouting/>
  //   <SpaExample/>
  //   <LS7/>
  //   <BT1/>
  //   </div>
   <BrowserRouter>
      <Routes>
        <Route path="/ls9/*" element={<LS9 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
