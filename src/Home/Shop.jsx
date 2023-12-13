import React from "react";
import { Products } from "./Products.js";
import Items from "./Items";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="products">
      {Products.map((item) => (
        <Items key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Shop;
