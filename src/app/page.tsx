import useAxios from "@/helpers/useAxios";
import Home from "../components/Home";

export default async function Page() {
  //for initial server side rendering
  const limit = 8;
  const { data } = await useAxios(`products?limit=${limit}`);

  return <Home data={data} limit={limit} />;
}
