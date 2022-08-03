import React from "react";
import shoppingCartLogo from "../../../media/shopping-cart.png";
import "./ShoppingCart.css";

export const ShoppingCart = (props) => {
  const { cartLength } = props;

  return (
    <div className="shopping--cart">
      <p>{cartLength}</p>
      <img
        src={shoppingCartLogo}
        alt="shopping cart logo"
        className="shopping--cart--logo"
      />
    </div>
  );
};
