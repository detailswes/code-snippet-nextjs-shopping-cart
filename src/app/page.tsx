import Home from "../components/Home";

export default async function Page() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return <Home data={data} />;
}
