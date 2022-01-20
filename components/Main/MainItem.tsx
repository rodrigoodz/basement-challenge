import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Product } from "../../product/types";

import AddToCart from "./AddToCart";

const MainItem: React.FC<{ data: Product }> = ({ data }) => {
  const { name, price, image } = data;
  const [show, setShow] = useState<Boolean>(false);

  return (
    <div className="">
      <div
        className="relative flex items-center justify-center flex-1 border-b-2 bg-gradient-to-t from-gradientColor"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="flex justify-center flex-1">
          <Image
            alt={name}
            src={image}
            layout={"fixed"}
            width={256}
            height={400}
          />
        </div>
        <AnimatePresence>
          {show && <AddToCart product={data} />}
        </AnimatePresence>
      </div>
      <div className="flex flex-row justify-between mt-2 ">
        <p className="text-xl ">{name}</p>
        <p className="text-xl ">${price}</p>
      </div>
    </div>
  );
};

export default MainItem;
