import ProductDetail from "@/components/Product/details";
import { baseUrl } from "@/config";
export default async function Page(props: any) {
  const id = props.params.id;
  const response = await fetch(`${baseUrl}products/${id}`);
  const data = await response.json();
  console.log(data);
  return <ProductDetail data={data} />;
}
