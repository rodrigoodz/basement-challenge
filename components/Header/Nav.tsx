import React, { useEffect, useState } from "react";
import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import logo from "../../public/logo.svg";
import small_logo from "../../public/small_logo.svg";
import navicons from "../../public/navicons.svg";

import { CartProduct } from "../../product/types";
import Cart from "../Cart/Cart";

const Nav: React.FC = () => {
  const [cart, setCart] = useState<CartProduct[] | []>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") as string) || [];
    setCart(data);
  }, [showCart]);

  const handleRemove = (e: string) => {
    const product = cart.find((p) => p.name === e);

    let newData = [];
    if (product?.quantity === 1) {
      newData = cart.filter((p: CartProduct) => p.name !== e);
    } else {
      newData = cart.map((p: CartProduct) => {
        if (p.name === e) {
          return {
            ...p,
            quantity: p.quantity - 1,
          };
        }
        return p;
      });
    }

    setCart(newData);
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  const handleAdd = (e: string) => {
    const newData = cart.map((d: any) => {
      if (d.name === e) {
        return {
          ...d,
          quantity: d.quantity + 1,
        };
      } else {
        return d;
      }
    });

    setCart(newData);
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  return (
    <header className="flex flex-row items-center justify-between mx-4 mt-8 md:mx-8 ">
      <AnimatePresence>
        {showCart && (
          <Cart
            cartProducts={cart}
            onClose={() => setShowCart(false)}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        )}
      </AnimatePresence>
      <div className="hidden sm:block ">
        <Image alt="logo" src={logo} />
      </div>
      <div className="sm:hidden">
        <Image alt="small_logo" src={small_logo} />
      </div>
      <div className="hidden md:block">
        <Image alt="nav icons" src={navicons} />
      </div>
      <p
        onClick={() => setShowCart(true)}
        className="px-5 py-3 text-lg font-bold leading-5 tracking-tighter border rounded-full cursor-pointer sm:px-6 md:px-8"
      >
        CART
      </p>
    </header>
  );
};

export default Nav;
