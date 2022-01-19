import React from "react";

import Product from "./Product";

import { product } from "../../product/types";

const items: product[] = [
  {
    name: "Black t-shirt",
    price: 7.95,
    image: require("../../public/products/shirt.png"),
  },
  {
    name: "Black hoodie",
    price: 13,
    image: require("../../public/products/hoodie.png"),
  },
  {
    name: "Black cap",
    price: 23,
    image: require("../../public/products/cap.png"),
  },
];

const Main: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-24 mx-7">
      {items.map((item, index) => (
        <Product key={index} data={item} />
      ))}
    </div>
  );
};

export default Main;
