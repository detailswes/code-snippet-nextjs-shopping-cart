import { fetchProductList } from "@/redux/productSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import Card from "./Card";

// const products = [
//   {
//     id: 1,
//     name: "Earthen Bottle",
//     href: "#",
//     price: "$48",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 2,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },
//   {
//     id: 3,
//     name: "Focus Paper Refill",
//     href: "#",
//     price: "$89",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 5,
//     name: "Focus Card Tray",
//     href: "#",
//     price: "$68",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
//     imageAlt: "Paper card sitting upright in walnut card holder on desk.",
//   },
//   {
//     id: 6,
//     name: "Focus Multi-Pack",
//     href: "#",
//     price: "$62",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
//     imageAlt:
//       "Stack of 3 small drab green cardboard paper card refill boxes with white text.",
//   },
//   {
//     id: 7,
//     name: "Brass Scissors",
//     href: "#",
//     price: "$82",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg",
//     imageAlt:
//       "Brass scissors with geometric design, black steel finger holes, and included upright brass stand.",
//   },
//   {
//     id: 8,
//     name: "Focus Carry Pouch",
//     href: "#",
//     price: "$94",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg",
//     imageAlt:
//       "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
//   },
// ];

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { products, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  //   console.log(products, "products");

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product: any) => {
              return <Card product={product} key={product.id} />;
            })}
          {/* {products &&
            products?.map((product: any) => (
              <Link
                key={product.id}
                legacyBehavior
                passHref
                href={`/project-details/${product.id}`}
              >
                <a className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                </a>
              </Link>
            ))} */}
        </div>
      </div>
    </div>
  );
}
