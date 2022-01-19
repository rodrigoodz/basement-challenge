import React from "react";
import Image from "next/image";

import shape1 from "../../public/shape1.svg";
import shape2 from "../../public/shape2.svg";

const HeaderQuote: React.FC = () => {
  return (
    <div className="relative mt-14">
      <hr />
      <div className="relative overflow-hidden whitespace-nowrap">
        <p className="relative py-3.5 text-7xl -left-72">
          A man can&apos;t have enough basement swag - A man can&apos;t have
          enough basement swag
        </p>
      </div>
      <hr />
      <div className="absolute -top-4 left-24">
        <Image alt="shape2" src={shape2} />
      </div>
      <div className="absolute -top-32 right-32">
        <Image alt="shape1" src={shape1} />
      </div>
    </div>
  );
};

export default HeaderQuote;
