import React from "react";
import "./OrderSummary.css";
import orderConfirmed from "../../../media/orderConfirmed.png";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();
  var val = Math.floor(900000 + Math.random() * 10000000);

  return (
    <div className="order--summary--container">
      <h3>Your Order has been confirmed!</h3>
      <img src={orderConfirmed} alt="order confirmed" />
      <p>Thankyou for your purchase!</p>
      <p>Your order number is: {val}</p>
      <p>You will receive an order confirmation soon!</p>
      <button
        className="order--button"
        type="button"
        onClick={() => navigate(-1)}
      >
        {" "}
        Continue Shopping!
      </button>
    </div>
  );
};
