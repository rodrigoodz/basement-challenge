import React from "react";
import { CartProduct } from "../../product/types";
import Image from "next/image";

interface Props {
  product: CartProduct;
  onAdd: (e: string) => void;
  onRemove: (e: string) => void;
}

const CartItem: React.FC<Props> = ({ product, onAdd, onRemove }) => {
  return (
    <div className="flex flex-row h-auto px-3 py-3 mx-8 mb-8 border">
      <div className="relative flex items-center justify-center w-32 bg-gradient-to-t from-gradientColor">
        <Image
          alt={product.name}
          src={product.image}
          layout="fixed"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="flex flex-col flex-1 px-3 text-left md:justify-between">
        <h1 className="text-sm font-bold sm:text-2xl md:text-3xl lg:text-4xl">
          {product.name.toUpperCase()}
        </h1>
        <div>
          <div className="flex mt-8">
            <h2 className="text-sm font-bold md:text-xl ">QUANTITY:</h2>
            <div className="flex ml-1 text-sm font-bold border rounded-full md:text-xl">
              <p
                className="mx-2 cursor-pointer"
                onClick={() => onRemove(product.name)}
              >
                -
              </p>
              <p className="mx-2">{product.quantity}</p>
              <p
                className="mx-2 cursor-pointer"
                onClick={() => onAdd(product.name)}
              >
                +
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between mt-2 md:items-center md:flex-row">
            <p className="text-sm font-bold md:text-xl">SIZE: S M L XL</p>
            <p className="text-sm font-bold md:text-xl lg:text-3xl">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
