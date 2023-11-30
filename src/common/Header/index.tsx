import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { useSelector } from "react-redux";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Cart from "@/components/Cart";
import Link from "next/link";
import { RootState } from "@/redux/store";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleSideBar = () => setOpenCart((open) => !open);

  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between py-6 lg:px-0"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link legacyBehavior passHref href="/">
              <a className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-20 w-18"
                  src="https://img.freepik.com/free-vector/flat-design-bookstore-logo-template_23-2149325325.jpg?w=826&t=st=1701090789~exp=1701091389~hmac=bb5cbecb581461c77bb6f6c98c2844f4f9647aaf26c0f55c198adf934371a201"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link legacyBehavior passHref href="/">
              <a className="text-sm font-semibold leading-6 text-gray-900">
                Home
              </a>
            </Link>

            <Link legacyBehavior passHref href="/about-us">
              <a className="text-sm font-semibold leading-6 text-gray-900">
                About
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end relative">
            <div className="absolute bg-indigo-600 hover:bg-indigo-700 w-5 h-5 flex items-center justify-center rounded-full right-[-10px] top-[-10px]">
              <p className="text-xs text-white">
                {cart.length > 0 ? cart.length : 0}
              </p>
            </div>
            <div
              onClick={toggleSideBar}
              className="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-20 w-18"
                  src="https://img.freepik.com/free-vector/flat-design-bookstore-logo-template_23-2149325325.jpg?w=826&t=st=1701090789~exp=1701091389~hmac=bb5cbecb581461c77bb6f6c98c2844f4f9647aaf26c0f55c198adf934371a201"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link legacyBehavior passHref href="/">
                    <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Home
                    </a>
                  </Link>

                  <Link legacyBehavior passHref href="/about-us">
                    <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      About
                    </a>
                  </Link>
                </div>
                <div className="py-6  lg:flex lg:flex-1 lg:justify-end relative">
                  <div className="absolute bg-indigo-600 hover:bg-indigo-700 w-5 h-5 flex items-center justify-center rounded-full left-[10px] top-3">
                    <p className="text-xs text-white">
                      {cart.length > 0 ? cart.length : 0}
                    </p>
                  </div>
                  <div
                    onClick={toggleSideBar}
                    className="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <Cart isOpen={openCart} onClose={toggleSideBar} />
    </>
  );
}
