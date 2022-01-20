import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import addtocart from "../../public/addtocart.svg";

import { Product } from "../../product/types";

const AddToCart: React.FC<{ product: Product }> = ({ product }) => {
  const handleClick = () => {
    const data = JSON.parse(localStorage.getItem("cart") as string) || [];

    const findIndex = data.findIndex((d: Product) => d.name === product.name);

    let newData: Product[] = [];

    // me fijo el producto ya esta en el localStorage
    if (findIndex !== -1) {
      // si ya esta armo un nuevo array modificando la cantidad y price del producto en cuestion
      newData = data.map((d: any) => {
        if (d.name === product.name) {
          return {
            name: product.name,
            quantity: d.quantity + 1,
            price: product.price,
            image: product.image,
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
          name: product.name,
          quantity: 1,
          price: product.price,
          image: product.image,
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
      transition={{ duration: 0.3 }}
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
