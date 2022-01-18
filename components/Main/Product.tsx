import React, { useState } from "react";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { AnimatePresence } from "framer-motion";

interface product {
  name: string;
  price: number;
  image?: any;
}

const Product: React.FC<{ data: product }> = ({ data }) => {
  const { name, price, image = null } = data;
  const [show, setShow] = useState<Boolean>(false);

  return (
    <div className="">
      <div
        className="relative flex-1 border-b-2 bg-gradient-to-t from-gradientColor"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Image src={image} alt={name} />
        <AnimatePresence>{show && <AddToCart />}</AnimatePresence>
      </div>
      <div className="flex flex-row justify-between mt-2 ">
        <p className="text-xl ">{name}</p>
        <p className="text-xl ">${price}</p>
      </div>
    </div>
  );
};

export default Product;
