import { formatAsDollars, ProductTypes } from "@/utils/types.ts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

function SingleFeaturedProduct({ product }: { product: ProductTypes }) {
  return (
    <div>
      <Card>
        <CardContent className="p-4">
          <img
            src={product.attributes.image}
            alt={product.attributes.description}
            className={"w-full h-[14rem] rounded-md object-fill"}
          />
        </CardContent>
        <CardHeader className={"text-center capitalize"}>
          <CardTitle>{product.attributes.title}</CardTitle>
          <CardDescription className={"text-primary"}>
            {formatAsDollars(product.attributes.price)}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default SingleFeaturedProduct;
