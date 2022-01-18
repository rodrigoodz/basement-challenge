import React from "react";
import Image from "next/image";

import footer from "../../public/footer.svg";

const Footer: React.FC = () => {
  return (
    <div className="mx-8 mt-12 text-center ">
      <Image alt="footer img" layout={"responsive"} src={footer} />
    </div>
  );
};

export default Footer;
