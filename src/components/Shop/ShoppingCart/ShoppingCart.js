import React from "react";
import shoppingCart from "../../../media/shopping-cart.png";
import "./ShoppingCart.css";

export const ShoppingCart = (props) => {
  const { cars } = props;

  return (
    <div className="shopping--cart">
      <p>{cars}</p>
      <img alt="shopping-cart logo" src={shoppingCart} />
    </div>
  );
};
