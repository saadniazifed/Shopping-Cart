import React, { useState } from "react";
import cars from "../../../carData/carData";
import "./ShopItems.css";

export const ShopItems = (props) => {
  const { carsQuantity, increaseCars, decreaseCars } = props;

  return (
    <div className="shopping--wrapper">
      {cars.map((car) => {
        return (
          <div className="shopping--container">
            <img src={car.image} alt="super car" />
            <div className="car--details ">
              <p className="carName">{car.name}</p>
              <p className="titilliumFont">{car.description}</p>
              <p className="titilliumFont">Price: ${car.price}</p>

              <div className="car--quantity--container">
                <button type="button" onClick={decreaseCars}>
                  -
                </button>
                <div className="car--quantity">{carsQuantity}</div>
                <button type="button" onClick={increaseCars}>
                  +
                </button>
              </div>

              <button type="button" className="addToCart">
                Add to Cart
              </button>
            </div>
            <div className="marginBottom"></div>
          </div>
        );
      })}
    </div>
  );
};
