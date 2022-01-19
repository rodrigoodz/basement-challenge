import React from "react";
import Image from "next/image";

import shape1 from "../../public/shape1.svg";
import shape2 from "../../public/shape2.svg";

const HeaderQuote: React.FC = () => {
  return (
    <div className="relative mt-2 md:mt-14">
      <hr />
      <div className="relative overflow-hidden whitespace-nowrap">
        <p className="relative py-2 md:py-3.5 text-lg sm:text-4xl md:text-7xl -left-36 sm:-left-44 md:-left-72 font-bold">
          A man can&apos;t have enough basement swag - A man can&apos;t have
          enough basement swag
        </p>
      </div>
      <hr />
      <div className="absolute hidden -top-4 left-24 md:block">
        <Image alt="shape2" src={shape2} />
      </div>
      <div className="absolute hidden -top-32 right-32 md:block">
        <Image alt="shape1" src={shape1} />
      </div>
    </div>
  );
};

export default HeaderQuote;
