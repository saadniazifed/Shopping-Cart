import React, { useState, useEffect } from "react";
import carsData from "../../carData/carData";
import { ShopItem } from "./ShopItem/ShopItem";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import "./Shop.css";

export const Shop = () => {
  const [cars, setCars] = useState(carsData);
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(cart.length);

  const renderShopItems = () => {
    return cars.map((car) => {
      return (
        <ShopItem
          cart={cart}
          car={car}
          key={car.id}
          changeCarAmount={changeCarAmount}
          addToCart={addToCart}
        />
      );
    });
  };

  const addToCart = (e, quantity, name) => {
    e.preventDefault();

    const cartObj = {
      quantity: quantity.cart,
      name: name,
    };

    setCart([
      ...cart,
      {
        cart: [...cart, cartObj],
      },
    ]);

    console.log(cart);
  };

  const changeCarAmount = (e) => {
    setCart(e.target.value);
  };

  return (
    <>
      <div className="shop--container">
        <div className="shopping--wrapper">
          {renderShopItems()}
          <ShoppingCart cartLength={cartLength} />
        </div>
      </div>
    </>
  );
};
