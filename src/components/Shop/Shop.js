import React, { useState } from "react";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import { ShopItems } from "./ShopItems/ShopItems";
import "./Shop.css";

export const Shop = () => {
  const [cars, setCars] = useState(0);
  const [addCart, setAddCart] = useState(false);

  const increaseCars = () => {
    if (cars < 10) {
      setCars((prevCars) => prevCars + 1);
    }
  };

  const decreaseCars = () => {
    if (cars > 0) {
      setCars((prevCars) => prevCars - 1);
    }
  };

  return (
    <div className="shop--container">
      <ShopItems
        increaseCars={increaseCars}
        decreaseCars={decreaseCars}
        carsQuantity={cars}
      />
      <ShoppingCart decreaseCars={decreaseCars} cars={cars} />
    </div>
  );
};
