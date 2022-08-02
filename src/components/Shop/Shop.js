import React, { useState } from "react";
import carsData from "../../carData/carData";
import { ShopItem } from "./ShopItem/ShopItem";
import "./Shop.css";

export const Shop = () => {
  const [cars, setCars] = useState(carsData);
  // const [cartList, setCartList] = useState([]); <--Will use it later for Adding it to Cart.

  const renderShopItems = () => {
    return cars.map((car) => {
      return <ShopItem car={car} />;
    });
  };

  return (
    <>
      <div className="shop--container">
        <div className="shopping--wrapper">{renderShopItems()}</div>
      </div>
    </>
  );
};
