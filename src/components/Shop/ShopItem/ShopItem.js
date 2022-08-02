import React from "react";
import "./ShopItem.css";

export function ShopItem(props) {
  const { car, addToCart, cart, changeCarAmount } = props;

  return (
    <>
      <div className="shopping--container" key={car.id} id={car.id}>
        <img src={car.image} alt="super car" />
        <div className="car--details ">
          <p className="carName">{car.name}</p>
          <p className="titilliumFont">{car.description}</p>
          <p className="titilliumFont">Price: ${car.price}</p>

          <input
            type="number"
            className="car--quantity--input"
            onChange={(e) => changeCarAmount(e)}
            value={cart}
            name={car.name}
            min="1"
            max="10"
          />
          <button
            type="button"
            className="addToCart"
            onClick={(e) => addToCart(e, { cart }, car.name)}
          >
            Add to Cart
          </button>
        </div>
        <div className="marginBottom"></div>
      </div>
    </>
  );
}
