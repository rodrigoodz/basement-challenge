import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import addtocart from "../../public/addtocart.svg";

import { product } from "../../product/types";

interface cartProduct {
  name: string;
  quantity: number;
  totalPrice: number;
}

const AddToCart: React.FC<product> = ({ name, price }) => {
  const handleClick = () => {
    const data = JSON.parse(localStorage.getItem("cart") as string) || [];

    const findIndex = data.findIndex((d: cartProduct) => d.name === name);

    let newData: cartProduct[] = [];

    // me fijo el producto ya esta en el localStorage
    if (findIndex !== -1) {
      // si ya esta armo un nuevo array modificando la cantidad y totalPrice del producto en cuestion
      newData = data.map((d: cartProduct) => {
        if (d.name === name) {
          return {
            name: name,
            quantity: d.quantity + 1,
            totalPrice: (d.quantity + 1) * price,
          };
        } else {
          return d;
        }
      });
    } else {
      // sino directamente lo agrego al localStorage
      newData = [
        ...data,
        {
          name: name,
          quantity: 1,
          totalPrice: price,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(newData));
  };

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className="absolute inset-0 flex items-center justify-center"
      exit={{ opacity: 0, scale: 0 }}
      initial={{ opacity: 0, scale: 0.75 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        alt={"add to cart"}
        className="cursor-pointer"
        onClick={handleClick}
        src={addtocart}
      />
    </motion.div>
  );
};

export default AddToCart;
