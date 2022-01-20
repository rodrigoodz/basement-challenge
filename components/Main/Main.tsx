import React from "react";

import Product from "./Product";

import { product } from "../../product/types";

const items: product[] = [
  {
    name: "Black t-shirt",
    price: 7.95,
    image: require("../../public/products/shirt.png"),
    quantity: 1,
  },
  {
    name: "Black hoodie",
    price: 13,
    image: require("../../public/products/hoodie.png"),
    quantity: 1,
  },
  {
    name: "Black cap",
    price: 23,
    image: require("../../public/products/cap.png"),
    quantity: 1,
  },
];

const Main: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-12 md:mt-24 sm:grid-cols-2 md:grid-cols-3 mx-7">
      {items.map((item, index) => (
        <Product key={index} data={item} />
      ))}
    </div>
  );
};

export default Main;
