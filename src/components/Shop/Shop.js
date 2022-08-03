import React, { useState } from "react";
import carsData from "../../carData/carData";
import { ShopItem } from "./ShopItem/ShopItem";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import "./Shop.css";

export const Shop = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (quantity, name, price) => {
    const cartObj = {
      quantity,
      name,
      price,
    };
    setCart((prev) => [...prev, cartObj]);
  };

  return (
    <>
      <div className="shop--container">
        <div className="shopping--wrapper">
          {carsData.map((car) => (
            <ShopItem key={car.id} car={car} addToCart={addToCart} />
          ))}

          <ShoppingCart cartLength={cart.length} cart={cart} />
        </div>
      </div>
    </>
  );
};
