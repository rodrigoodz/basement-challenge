import React from "react";
import Image from "next/image";

import logo from "../../public/logo.svg";
import navicons from "../../public/navicons.svg";

const Nav: React.FC = () => {
  return (
    <header className="flex flex-row items-center justify-between mx-8 mt-8">
      <div>
        <Image alt="logo" src={logo} />
      </div>
      <Image alt="nav icons" src={navicons} />
      <p className="px-8 py-3 text-lg font-bold leading-5 tracking-tighter border rounded-full">
        CART (0)
      </p>
    </header>
  );
};

export default Nav;
