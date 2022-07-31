import React from "react";
import cars from "../../../carData/carData";
import "./ShopItems.css";

export const ShopItems = () => {
  return (
    <div className="shopping--wrapper">
      {cars.map((car) => {
        return (
          <div className="shopping--container">
            <img src={car.image} alt="super car" />
            <div className="car--details">
              <p className="carName">{car.name}</p>
              <p className="titilliumFont">{car.description}</p>
              <p className="titilliumFont">Price: ${car.price}</p>
            </div>
            <div className="marginBottom"></div>
          </div>
        );
      })}
    </div>
  );
};
