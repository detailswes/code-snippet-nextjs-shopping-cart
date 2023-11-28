import Link from "next/link";
import Home from "../components/Home";

export default async function Page() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  return <Home data={data} />;
}
