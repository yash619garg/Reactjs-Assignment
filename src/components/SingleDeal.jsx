import React from "react";
import { Link } from "react-router-dom";

const SingleDeal = ({ deal }) => {
  const { title, image, about, discount, discount_time, price } = deal;
  return (
    <div className="single-deal">
      <img className="single-deal-img" src={image} alt={title} />
      <div className="single-deal-discount">
        {" "}
        <button>{discount}% off</button>
        <button>{discount_time}</button>
      </div>
      <div className="single-deal-title">{title}</div>
      <div className="single-deal-about">{about}</div>
      <div className="single-deal-price">
        <div className="single-deal-price-effective">
          ${price - (price * discount) / 100}
        </div>
        <div className="single-deal-price-actual">${price}</div>
        <div className="single-deal-price-discount">({discount}% Off)</div>
      </div>
      <button className="view-btn">
        <Link to="/todayDeal">view Deals</Link>
      </button>
    </div>
  );
};

export default SingleDeal;
