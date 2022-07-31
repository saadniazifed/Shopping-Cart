import React from "react";
import shoppingCart from "../../../media/shopping-cart.png";
import "./ShoppingCart.css";

export const ShoppingCart = () => {
  return (
    <div className="shopping--cart">
      <img alt="shopping-cart logo" src={shoppingCart} />
    </div>
  );
};
