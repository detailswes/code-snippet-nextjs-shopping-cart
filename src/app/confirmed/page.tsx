import Link from "next/link";

const OrderConfirmed = () => {
  return (
    <div>
      <div className="bg-white max-w-4xl mx-auto p-12">
        <div className="text-center">
          <p className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#eb3188"
              className="w-16 h-16 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </p>
          <h4 className="mb-4">Order Confirmation</h4>
          <p className="text-base text-gray-900">Hey Smiles Davis,</p>
          <p className="text-base text-gray-900">
            We have got your order! Your world is about to look a whole lot
            better.
          </p>
          <p className="text-base text-gray-900">
            We will drop you another email when your order ships.
          </p>
          <p className="mt-8">
            or {""}
            <Link legacyBehavior href="/">
              <span className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
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
