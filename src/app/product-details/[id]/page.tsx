import ProductDetail from "@/components/Product/details";
import useAxios from "@/helpers/useAxios";

export default async function Page(props: any) {
  const id = props.params.id;

  const { data } = await useAxios(`products/${id}`);

  return <ProductDetail data={data} />;
}
