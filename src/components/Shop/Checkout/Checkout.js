import React, { useState } from "react";
import "./Checkout.css";

export const Checkout = () => {
  return (
    <div className="checkout--cart--container">
      <span className="close--cart">x</span>
      <div className="checkout--center">
        <h4>Your Cart: </h4>
        <div className="checkout--items--container">
          <div className="cart--items">Hello</div>
          <div className="cart--total">Total (USD):</div>
        </div>
        <div className="checkout--buttons">
          <button type="button" className="btn btn-primary">
            Checkout
          </button>
          <button type="button" className="btn btn-primary">
            Empty Cart
          </button>
        </div>
      </div>
    </div>
  );
};
