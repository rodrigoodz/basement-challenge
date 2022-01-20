import React from "react";
import { product } from "../../product/types";
import CartItem from "./CartItem";
import { motion } from "framer-motion";

// TODO usar un useContext porque sino queda desactualizado el Cart(numerito)

const Cart: React.FC<{ cart: product; onClose: () => void }> = ({
  cart,
  onClose,
}) => {
  const totalPrice = (cart as any).reduce(
    (total: number, currentValue: product) =>
      total + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <motion.div
      className="absolute top-0 right-0 left-auto z-50 w-screen md:border md:w-5/12 "
      style={{ backgroundColor: "black" }}
      animate={{ opacity: 1, right: 1 }}
      exit={{ opacity: 0, right: 0 }}
      initial={{ opacity: 0, right: 0.75 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col justify-between">
        <p
          className="self-end pt-10 text-2xl cursor-pointer pr-11"
          onClick={onClose}
        >
          → CLOSE
        </p>
        <div className="text-center">
          <p className="mt-4 font-bold text-8xl md:mt-9 sm:text-4xl md:text-7xl lg:text-7xl xl:text-8xl">
            YOUR CART
          </p>
        </div>
        <div className="mt-4 overflow-y-auto h-96">
          {(cart as any).map((c: product, index: number) => (
            <CartItem key={index} cartitem={c} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full md:border md:flex-row">
        <div className="flex justify-between px-8 py-6 md:flex-row">
          <p className="text-xl md:text-4xl">TOTAL: </p>
          <p className="text-xl md:ml-2 md:text-4xl">${totalPrice}</p>
        </div>
        <div className="mx-8 text-center border-t md:border-none md:mx-0">
          <p className="py-3 text-6xl border-t cursor-pointer md:px-8 md:py-6 md:border-l md:text-4xl">
            CHECKOUT
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
