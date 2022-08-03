import React, { useState } from "react";
import carsData from "../../carData/carData";
import { ShopItem } from "./ShopItem/ShopItem";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import "./Shop.css";
// import { Checkout } from "./Checkout/Checkout";

export const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (quantity, name, price) => {
    const cartObj = {
      quantity,
      name,
      price,
    };
    setCart((prev) => [...prev, cartObj]);
  };
  console.log(cart);

  return (
    <>
      <div className="shop--container">
        <div className="shopping--wrapper">
          {carsData.map((car) => (
            <ShopItem key={car.id} car={car} addToCart={addToCart} />
          ))}
          <ShoppingCart cartLength={cart.length} />
        </div>
      </div>
    </>
  );
};
