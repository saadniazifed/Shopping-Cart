import React, { useState } from "react";
import carsData from "../../carData/carData";
import { ShopItems } from "./ShopItems/ShopItems";

export const Shop = () => {
  const [cars, setCars] = useState(carsData);
  const [carAmount, setCarAmount] = useState();
  // const [cartList, setCartList] = useState([]); <--Will use it later for Adding it to Cart.

  return (
    <>
      <ShopItems
        cars={cars}
        carAmount={carAmount}
        setCarAmount={setCarAmount}
        // addToCart={addToCart}
      />
    </>
  );
};
