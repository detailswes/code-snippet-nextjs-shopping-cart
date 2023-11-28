"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";

const Checkout = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc: number, curr: any) => acc + curr.price, 0);
    setCartTotal(total);
  }, [cart]);

  return (
    <div className="bg-white max-w-4xl mx-auto p-12">
      <div className="px-4 pt-8">
        <p className="text-xl font-medium">Order Summary</p>
        <p className="text-gray-400">
          Check your items. And select a suitable shipping method.
        </p>
        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          {cart.map((product: any) => (
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src={product.images[0]}
                alt={product.images[0]}
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{product.title}</span>
                <p className="text-lg font-bold">${product.price}.00</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-lg font-medium">
          Shipping Methods:{" "}
          <span className="font-semibold">Cash on delivery</span>
        </p>

        <div className="mt-6 border-t border-b py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Subtotal</p>
            <p className="font-semibold text-gray-900">${cartTotal}.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Shipping</p>
            <p className="font-semibold text-gray-900">
              ${Math.round((cartTotal * 10) / 100)}.00
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900">
            ${Math.round(cartTotal + (cartTotal * 10) / 100)}.00
          </p>
        </div>

        <Link legacyBehavior passHref href="/confirmed">
          <button className="mt-4 mb-8 w-full rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
