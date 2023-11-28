"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addToCart } from "@/redux/cartSlice";

const Card = ({ product }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector((state: RootState) => state.cart);

  //func to handle add cart items
  const handleAddToCart = async (cartItems: any) => {
    dispatch(addToCart(cartItems));
  };

  //FUNC TO disable button if cart item exists already in cart
  const shouldDisableBtn = (itemExist: number): boolean => {
    const isItemAlreadyExist = cart.some((item: any) => item.id === itemExist);
    return isItemAlreadyExist;
  };

  return (
    <>
      {/* <Link
        key={product.id}
        legacyBehavior
        passHref
        href={`/project-details/${product.id}`}
      > */}
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
          {product.price}
        </p>
        <div>
          <button
            style={{
              backgroundColor: shouldDisableBtn(product.id) ? "gray" : "black",
              color: "white",
            }}
            disabled={shouldDisableBtn(product.id)}
            onClick={() => handleAddToCart(product)}
          >
            Add to cart
          </button>
          <br />
          <button>increase</button> <br />
          <button>decrease</button>
        </div>
      </a>
      {/* </Link> */}
    </>
  );
};

export default Card;
