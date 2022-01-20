import React, { useEffect, useState } from "react";
import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import logo from "../../public/logo.svg";
import small_logo from "../../public/small_logo.svg";
import navicons from "../../public/navicons.svg";
import Cart from "../Cart/Cart";

const Nav: React.FC = () => {
  const [cart, setCart] = useState<any>({});
  const [showCart, setShowCart] = useState<boolean>(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") as string) || [];
    setCart(data);
  }, []);

  return (
    <header className="flex flex-row items-center justify-between mx-4 mt-8 md:mx-8 ">
      <AnimatePresence>
        {showCart && <Cart cart={cart} onClose={() => setShowCart(false)} />}
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
        CART ({cart.length})
      </p>
    </header>
  );
};

export default Nav;
