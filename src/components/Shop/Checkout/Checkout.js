import React, { useState, useEffect } from "react";
import "./Checkout.css";

export const Checkout = ({ cartLength, cart, hideCheckOut }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.map((product) => {
      const productTotal = product.price * product.quantity;
      total = total + productTotal;
      return total;
    });
    setTotalAmount(total);
  }, [cart, totalAmount]);

  return (
    <div className="checkout--cart--container animate">
      <span className="close--cart" onClick={hideCheckOut}>
        x
      </span>
      <div className="checkout--center">
        <h4>Your Cart: {cartLength}</h4>
        <div className="checkout--items--container">
          <div>
            {cart.map((car) => (
              <div className="cart--items">
                <p>Name: {car.name}</p>
                <p>Amount: {car.quantity}</p>
                <p>${car.quantity * car.price}</p>
              </div>
            ))}
          </div>
          <div className="cart--total">
            <p>Total (USD): </p>
            <p>{totalAmount}</p>
          </div>
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
