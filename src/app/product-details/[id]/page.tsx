import Link from "next/link";
import ProductDetail from "@/components/Product/details";
export default async function Page(props: any) {
  const id = props.params.id;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return <ProductDetail data={data} />;
}
