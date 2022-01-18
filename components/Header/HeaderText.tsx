import React from "react";
import Image from "next/image";

import text from "../../public/header.svg";

const HeaderText: React.FC = () => {
  return (
    <div className="mx-8 mt-12 text-center">
      <Image alt="header text" layout="responsive" src={text} />
    </div>
  );
};

export default HeaderText;
