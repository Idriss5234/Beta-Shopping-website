import React, { useContext } from "react";
import "./Items.css";
import { ShopContext } from "../Content/Shop-Context";

const Items = ({ data }) => {
  const { id, name, price, image } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="container">
      <div className="card">
        <img src={image} alt={name}></img>
        <p>{name}</p>
        <h5>{price}$</h5>
        <button onClick={() => addToCart(id)}>
          Add to Cart
          {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Items;
