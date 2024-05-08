import ProductsContainer from "@/components/ProductsContainer.tsx";
import { Params, ProductsType } from "@/utils/types.ts";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import FilterContainer from "@/components/FilterContainer.tsx";
import axios from "axios";
import PaginationContainer from "@/components/PaginationContainer.tsx";

function Products() {
  const loaderData = useLoaderData() as ProductsType;
  const { data } = loaderData;
  return (
    <main className={"align-element py-12"}>
      <FilterContainer />
      <ProductsContainer products={data} />
      <PaginationContainer />
    </main>
  );
}

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsType & { params: Params }> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await axios.get(
    "https://strapi-store-server.onrender.com/api/products",
    { params },
  );

  return { ...response.data, params };
};
export default Products;
