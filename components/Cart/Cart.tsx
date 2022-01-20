import React, { useRef } from "react";

import { Dialog } from "@headlessui/react";
import CartItem from "../Cart/CartItem";

import { CartProduct } from "../../product/types";
import { motion } from "framer-motion";

interface Props {
  cartProducts: CartProduct[];
  onClose: () => void;
  handleAdd: (e: string) => void;
  handleRemove: (e: string) => void;
}

const Cart: React.FC<Props> = ({
  cartProducts,
  onClose,
  handleAdd,
  handleRemove,
}) => {
  let checkoutButtonRef = useRef(null);

  const totalPrice = cartProducts.reduce(
    (total: number, currentValue: CartProduct) =>
      total + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <Dialog
      initialFocus={checkoutButtonRef}
      as={motion.div}
      open={true}
      onClose={onClose}
      className="absolute inset-0 z-50 w-screen overflow-x-hidden overflow-y-auto bg-black border md:bottom-auto md:left-auto md:float-left md:border md:w-5/12"
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
        <div className="text-center ">
          <p className="mt-4 font-bold text-8xl md:mt-9 sm:text-4xl md:text-7xl lg:text-7xl xl:text-8xl ">
            YOUR CART
          </p>
        </div>
        <div className="mt-4 overflow-y-auto md:h-96">
          {cartProducts.length > 0 ? (
            (cartProducts as any).map((c: CartProduct, index: number) => (
              <CartItem
                key={index}
                product={c}
                onAdd={handleAdd}
                onRemove={handleRemove}
              />
            ))
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-extrabold">No products</h3>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full md:border md:flex-row">
        <div className="flex justify-between px-8 py-2 md:py-6 md:flex-row">
          <p className="text-xl md:text-4xl">TOTAL: </p>
          <p className="text-xl md:ml-2 md:text-4xl">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
        <div className="mx-8 text-center border-t md:border-none md:mx-0">
          <p
            className="py-3 text-5xl cursor-pointer md:px-8 md:py-6 md:border-l md:text-4xl"
            ref={checkoutButtonRef}
            onClick={() => alert(JSON.stringify(cartProducts))}
          >
            CHECKOUT
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default Cart;
