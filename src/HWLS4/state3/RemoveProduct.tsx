import React from "react";
import { FiX } from "react-icons/fi";
import "../css/ProductCard.css"; 

type Props = {
  name: string;
  urlImage: string;
  price: number;
  onRemove: () => void;
};

const RemoveProduct = (props: Props) => {
  return (
    <div className="product-card">
      <img src={props.urlImage} alt={props.name} className="product-image" />
      
      <div className="product-info">
        <h3 className="product-name">{props.name}</h3>
        <span className="product-price">
          {props.price.toLocaleString("vi-VN")} đ
        </span>
      </div>

      {/* Nút X góc phải */}
      <button className="remove-btn" onClick={props.onRemove}>
        <FiX size={18} />
      </button>
    </div>
  );
};

export default RemoveProduct;
