import React from "react";
import "../css/card3.css"; // Assuming you have a CSS file for styling

type Props = {
 image: string;
  shop: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  title: string;
  rating: number;
  sold: number;
  topRightDiscount?: number;
};
const Card3 = (props: Props) => {
 return (
    <div className="card">
      <div className="image-wrapper" >
        <img src={props.image} alt={props.title} />
        {props.topRightDiscount && (
          <div className="discount-badge">-{props.topRightDiscount}%</div>
        )}
      </div>
      <div className="card-body">
        <div className="shop">{props.shop}</div>

        <div className="price-section">
          <span className="price">${props.price}</span>
          {props.originalPrice && <span className="original">${props.originalPrice}</span>}
          {props.discountPercent && (
            <span className="discount">{props.discountPercent}% off</span>
          )}
        </div>

        <div className="title">{props.title}</div>

        <div className="rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i <props.rating? "star filled" : "star"}>
              ★
            </span>
          ))}
        </div>

        <div className="progress">
          <div className="bar" style={{ width: `${(props.rating / 5) * 100}%` }} />
        </div>

        <div className="sold">Sold: {props.sold}</div>
      </div>
    </div>
  );
};

export default Card3;
