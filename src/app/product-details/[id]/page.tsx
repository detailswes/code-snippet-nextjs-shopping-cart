import ProductDetail from "@/components/Product/details";
export default async function Page(props: any) {
  const id = props.params.id;
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  const data = await response.json();
  console.log(data);
  return <ProductDetail data={data} />;
}
