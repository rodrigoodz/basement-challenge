import React from "react";
import Image from "next/image";

import logo from "../../public/logo.svg";
import small_logo from "../../public/small_logo.svg";
import navicons from "../../public/navicons.svg";

const Nav: React.FC = () => {
  return (
    <header className="flex flex-row items-center justify-between mx-4 mt-8 md:mx-8">
      <div className="hidden sm:block">
        <Image alt="logo" src={logo} />
      </div>
      <div className="sm:hidden">
        <Image alt="small_logo" src={small_logo} />
      </div>
      <div className="hidden md:block">
        <Image alt="nav icons" src={navicons} />
      </div>
      <p className="px-5 py-3 text-lg font-bold leading-5 tracking-tighter border rounded-full sm:px-6 md:px-8">
        CART (0)
      </p>
    </header>
  );
};

export default Nav;
