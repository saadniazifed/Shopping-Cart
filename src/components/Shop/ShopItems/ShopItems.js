import React from "react";
import "./ShopItems.css";

export function ShopItems({ cars }) {
  return (
    <>
      <div className="shop--container">
        <div className="shopping--wrapper">
          {cars.map((car) => {
            return (
              <div className="shopping--container" key={car.id} id={car.id}>
                <img src={car.image} alt="super car" />
                <div className="car--details ">
                  <p className="carName">{car.name}</p>
                  <p className="titilliumFont">{car.description}</p>
                  <p className="titilliumFont">Price: ${car.price}</p>

                  <input
                    type="number"
                    className="car--quantity--input"
                    // onChange={(e) => changeCarAmount(e)}
                    // value={carAmount}
                    name="cars"
                    min="1"
                    max="10"
                  />
                  <button
                    type="button"
                    className="addToCart"
                    // onClick={(e) => addToCart(e, cars)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="marginBottom"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
