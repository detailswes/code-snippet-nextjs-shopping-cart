import Link from "next/link";
import React from "react";

const OrderConfirmed = () => {
  return (
    <div>
      <div className="bg-white max-w-4xl mx-auto p-12">
        <div className="text-center">
          <h4 className="mb-4">Order Confirmation</h4>
          <p className="text-base text-gray-900">Hey Smiles Davis,</p>
          <p className="text-base text-gray-900">
            We've got your order! Your world is about to look a whole lot
            better.
          </p>
          <p className="text-base text-gray-900">We'll drop you another email when your order ships.</p>
          <p className="mt-8">
            or {""}
            <Link legacyBehavior href="/">
            <span
              className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
