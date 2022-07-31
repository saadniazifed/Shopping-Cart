import React from "react";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import { ShopItems } from "./ShopItems/ShopItems";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop--container">
      <ShopItems />
      <ShoppingCart />
    </div>
  );
};
