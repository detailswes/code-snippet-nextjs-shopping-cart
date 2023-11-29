"use client";
import Link from "next/link";

const Card = ({ product }: any) => {
  return (
    <>
      <Link
        key={product.id}
        legacyBehavior
        passHref
        href={`/product-details/${product.id}`}
      >
        <a className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {new Intl.NumberFormat("en-US", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
        </a>
      </Link>
    </>
  );
};

export default Card;
