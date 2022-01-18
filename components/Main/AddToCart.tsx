import React from "react";
import Image from "next/image";
import addtocart from "../../public/addtocart.svg";
import { motion } from "framer-motion";

const AddToCart: React.FC = () => {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        className="cursor-pointer"
        src={addtocart}
        alt="add to cart"
        onClick={handleClick}
      />
    </motion.div>
  );
};

export default AddToCart;
