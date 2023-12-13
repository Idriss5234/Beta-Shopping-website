import React from "react";
import Cart from "./Cart";
import { ShopContext } from "../Content/Shop-Context";
import { useContext } from "react";
import "./CartItem.css";

const CartItem = ({ data }) => {
  const { id, name, price, image } = data;
  const { addToCart, removeToCart, cartItems, putInCart } =
    useContext(ShopContext);

  return (
    <div className="card2">
      <img src={image}></img>
      <p>{name}</p>
      <h5>{price}$</h5>
      <button onClick={() => addToCart(id)}>+</button>
      <input
        value={cartItems[id]}
        onChange={(e) => putInCart(Number(e.target.value), id)}
      />
      <button onClick={() => removeToCart(id)}>-</button>
    </div>
  );
};

export default CartItem;
