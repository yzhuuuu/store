import ProductsContainer from "@/components/ProductsContainer.tsx";
import { ProductsType } from "@/utils/types.ts";
import { useLoaderData } from "react-router-dom";

function Products() {
  const loaderData = useLoaderData() as ProductsType;
  const { data } = loaderData;
  return (
    <main className={"align-element"}>
      <ProductsContainer products={data} />
    </main>
  );
}
export async function loader(): Promise<ProductsType> {
  const response = await fetch(
    "https://strapi-store-server.onrender.com/api/products",
  );
  return await response.json();
}

export default Products;
