import React from "react";
import Image from "next/image";

import text from "../../public/header.svg";

const HeaderText: React.FC = () => {
  return (
    <div className="mx-4 mt-5 text-center md:mt-12 md:mx-8 ">
      <Image alt="header text" layout="responsive" src={text} />
    </div>
  );
};

export default HeaderText;
