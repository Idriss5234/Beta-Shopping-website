import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="Nav">
      <div className="Links">
        <Link to="/" className="text">
          Shop
        </Link>
        <Link to="/Cart" className="text">
          <ShoppingCart className="cart" size={25} />
        </Link>
      </div>
      <div className="Title">Idriss Online Store</div>
    </div>
  );
};

export default Navigation;
