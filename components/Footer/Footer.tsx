import React from "react";
import Image from "next/image";

import footer from "../../public/footer.svg";

const Footer: React.FC = () => {
  return (
    <div className="mx-8 mt-4 text-center sm:mt-8 md:mt-12">
      <Image alt="footer img" layout={"responsive"} src={footer} />
    </div>
  );
};

export default Footer;
