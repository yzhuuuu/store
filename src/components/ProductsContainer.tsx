import { ProductTypes } from "@/utils/types.ts";

import SingleFeaturedProduct from "@/components/SingleFeaturedProduct.tsx";

function ProductsContainer({ products }: { products: ProductTypes[] }) {
  return (
    <section
      className={"grid  sm:grid-cols-2 md:grid-cols-3 sm:gap-3 gap-y-4 py-4"}
    >
      {products.map((product) => {
        return <SingleFeaturedProduct product={product} key={product.id} />;
      })}
    </section>
  );
}

export default ProductsContainer;
