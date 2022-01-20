import React from "react";
import { product } from "../../product/types";
import Image from "next/image";

const CartItem: React.FC<{ cartitem: product }> = ({ cartitem }) => {
  return (
    <div className="flex flex-row px-3 py-3 mx-8 mb-8 border">
      <Image
        alt={cartitem.name}
        src={cartitem.image}
        layout="fixed"
        width={150}
        height={150}
        className="bg-gradient-to-t from-gradientColor"
      />
      <div className="flex flex-col justify-between flex-1 px-3 text-left">
        <h1 className="text-sm md:text-4xl">{cartitem.name.toUpperCase()}</h1>
        <div>
          <div className="flex ">
            <h2 className="text-sm font-bold md:text-xl">QUANTITY:</h2>
            <div className="flex ml-1 text-sm font-bold border rounded-full md:text-xl">
              <p className="mx-2 cursor-pointer">-</p>
              <p className="mx-2">{cartitem.quantity}</p>
              <p className="mx-2 cursor-pointer">+</p>
            </div>
          </div>
          {/* //TODO debo agregar - y + (podria usar un utils que actualice */}
          {/* localstorage) */}
          <div className="flex flex-col items-center justify-between mt-2 md:flex-row">
            <p className="text-sm font-bold md:text-xl">SIZE: S M L XL</p>
            <p className="text-sm font-bold md:text-xl lg:text-3xl">
              ${cartitem.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
