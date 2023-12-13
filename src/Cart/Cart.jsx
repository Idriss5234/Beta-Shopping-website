import React, { useContext } from "react";
import { Products } from "../Home/Products";
import { ShopContext } from "../Content/Shop-Context";
import CartItem from "./CartItem";
import "./Cart.css";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, priceToPay } = useContext(ShopContext);
  const total = priceToPay();
  const Nav = useNavigate();

  return (
    <div className="cart">
      <h1>Your Cart Items:</h1>
      <div className="cartitems">
        {Products.map((Product) => {
          if (cartItems[Product.id] !== 0) {
            return <CartItem data={Product} />;
          }
        })}
      </div>
      {total > 0 ? (
        <div className="foot">
          <div className="tota">
            <p className="tot"> Total: {total} $</p>
          </div>
          <button className="btn0" onClick={() => Nav("/")}>
            Continue Shopping
          </button>
          <button className="btn0">Payment</button>
        </div>
      ) : (
        <h3>Your Cart is Empty </h3>
      )}
    </div>
  );
};

export default Cart;
