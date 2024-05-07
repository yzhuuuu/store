import { Separator } from "@/components/ui/separator.tsx";
import { ProductTypes } from "@/utils/types.ts";
import SingleFeaturedProduct from "@/components/SingleFeaturedProduct.tsx";

function FeaturedProducts({ products }: { products: ProductTypes[] }) {
  return (
    <section>
      <h2 className={"text-4xl mb-8 font-bold tracking-wide"}>
        Featured Products
      </h2>
      <Separator />
      <section
        className={"grid md:grid-cols-3 mt-5 md:gap-x-5 gap-y-4 capitalize"}
      >
        {products.map((product) => {
          return <SingleFeaturedProduct key={product.id} product={product} />;
        })}
      </section>
    </section>
  );
}

export default FeaturedProducts;
