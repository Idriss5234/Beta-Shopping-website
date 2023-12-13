import React, { createContext, useState } from "react";
import { Products } from "../Home/Products";

export const ShopContext = createContext(null); // Context is a way to share data (in this case, shopping cart information) between components without explicitly passing it down through props.

const getDefaultCard = () => {
  let cart = [];
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCard()); // Initialize cartItems with the default cart

  const priceToPay = () => {
    let total = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        //how to look in an object
        let iteminfo = Products.find((prod) => prod.id === Number(item));
        total += cartItems[item] * iteminfo.price;
      }
    }
    return total;
  };
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const putInCart = (newamount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newamount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    putInCart,
    priceToPay,
    priceToPay,
  }; //what to export
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children} {/* Use props.children to render child components */}
    </ShopContext.Provider>
  );
};
