import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import addtocart from "../../public/addtocart.svg";

const AddToCart: React.FC = () => {
  const handleClick = () => {};

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
