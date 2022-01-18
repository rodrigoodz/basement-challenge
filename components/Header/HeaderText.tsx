import React from "react";
import text from "../../public/header.svg";
import Image from "next/image";
import logo from "../../public/logo.svg";

const HeaderText: React.FC = () => {
  return (
    <div className="mx-8 mt-12 text-center">
      <Image src={text} alt="header text" layout="responsive" />
    </div>
  );
};

export default HeaderText;
