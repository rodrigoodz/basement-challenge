import React from "react";

import MainItem from "./MainItem";

import { Product } from "../../product/types";

interface Props {
  products: Product[];
}

const Main: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-12 md:mt-24 sm:grid-cols-2 md:grid-cols-3 mx-7">
      {products.map((product, index) => (
        <MainItem key={index} data={product} />
      ))}
    </div>
  );
};

export default Main;
