import React from "react";
import Image from "next/image";
import shape1 from "../../public/shape1.svg";
import shape2 from "../../public/shape2.svg";

const HeaderQuote: React.FC = () => {
  return (
    <div className="relative mt-14">
      <hr />
      <div className="relative overflow-hidden whitespace-nowrap">
        <p className="py-3.5 text-7xl -left-72 ">
          A man can’t have enough base­ment swag  —  A man can’t have enough
          base­ment swag
        </p>
      </div>
      <hr />
      <div className="absolute -top-4 left-24">
        <Image src={shape2} alt="shape2" />
      </div>
      <div className="absolute -top-32 right-32">
        <Image src={shape1} alt="shape1" />
      </div>
    </div>
  );
};

export default HeaderQuote;
