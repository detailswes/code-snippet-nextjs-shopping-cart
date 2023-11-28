import Home from "../components/Home";

export default async function Page() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await response.json();
  return <Home data={data} />;
}
