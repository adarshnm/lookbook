/* eslint-disable @next/next/no-img-element */
import { Product } from "@/types/looks";
import Image from "next/image";
import React from "react";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const img = product.images?.at(0);
  return (
    <div className="max-w-[270px] shadow-lg rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900 px-5 ">
      {!!img && (
        <Image
          src={img}
          alt={product.name}
          className="w-full h-48 object-cover"
          height={100}
          width={48}
          sizes="100vw"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <a
          href={`/products/${product.slug}`}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          View Details
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
