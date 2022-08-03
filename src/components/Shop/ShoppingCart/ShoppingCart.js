import React from "react";
import shoppingCartLogo from "../../../media/shopping-cart.png";
import { Checkout } from "../Checkout/Checkout";
import "./ShoppingCart.css";

export const ShoppingCart = (props) => {
  const { cartLength, cart } = props;

  return (
    <div className="shopping--cart">
      <p>{cartLength}</p>
      <img
        src={shoppingCartLogo}
        alt="shopping cart logo"
        className="shopping--cart--logo"
      />
      <Checkout cartLength={cartLength} cart={cart} />
    </div>
  );
};
