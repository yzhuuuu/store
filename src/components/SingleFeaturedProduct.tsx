import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { ProductTypes, formatAsDollars } from '@/utils/types.ts';

import { Link } from 'react-router-dom';

function SingleFeaturedProduct({ product }: { product: ProductTypes }) {
  return (
    <div>
      <Card>
        <CardContent className='p-4'>
          <Link to={`/products/${product.id}`}>
            <img
              src={product.attributes.image}
              alt={product.attributes.description}
              className={'w-full h-[14rem] rounded-md object-fill'}
            />
          </Link>
        </CardContent>
        <CardHeader className={'text-center capitalize'}>
          <CardTitle>{product.attributes.title}</CardTitle>
          <CardDescription className={'text-primary'}>
            {formatAsDollars(product.attributes.price)}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default SingleFeaturedProduct;
