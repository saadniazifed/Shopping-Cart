import React, { useState } from "react";
import shoppingCartLogo from "../../../media/shopping-cart.png";
import { Checkout } from "../Checkout/Checkout";
import "./ShoppingCart.css";

export const ShoppingCart = (props) => {
  const { cartLength, cart } = props;
  const [showCheckOut, setShowCheckout] = useState(false);

  const showCheckOutPage = () => {
    setShowCheckout(true);
  };

  const hideCheckOut = () => {
    setShowCheckout(false);
  };

  return (
    <div className="shopping--cart">
      <p>{cartLength}</p>
      <img
        src={shoppingCartLogo}
        alt="shopping cart logo"
        className="shopping--cart--logo"
        onClick={showCheckOutPage}
      />
      {showCheckOut && (
        <Checkout
          cartLength={cartLength}
          cart={cart}
          hideCheckOut={hideCheckOut}
        />
      )}
    </div>
  );
};
