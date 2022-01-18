import React from "react";

import HeaderText from "./HeaderText";
import HeaderQuote from "./HeaderQuote";
import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <div>
      <Nav />
      <HeaderText />
      <HeaderQuote />
    </div>
  );
};

export default Header;
