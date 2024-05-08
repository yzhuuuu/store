import { ProductTypes, ProductsType, formatAsDollars } from '@/utils/types';

import { Button } from './ui/button';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

function ProductDetail() {
  const { data }: { data: ProductTypes } = useLoaderData();
  return (
    <main className='align-element py-14 grid gap-y-4 sm:grid-cols-2 md:gap-x-14'>
      <section>
        <img
          src={data.attributes.image}
          alt={data.attributes.description}
          className='rounded-md w-96 h-96 lg:w-full'
        />
      </section>
      <section className='flex flex-col gap-y-5 capitalize'>
        <h3 className='font-bold text-xl'>{data.attributes.title}</h3>
        <h4 className='font-semi tracking-wide'>{data.attributes.company}</h4>
        <Button asChild className='self-start' variant={'secondary'}>
          <h5>{formatAsDollars(data.attributes.price)}</h5>
        </Button>
        <p className='leading-9 '>{data.attributes.description}</p>
      </section>
    </main>
  );
}
export async function loader({ params }): Promise<ProductsType> {
  const { id } = params;
  const response = await axios.get(
    `https://strapi-store-server.onrender.com/api/products/${id}`
  );

  return response.data;
}
export default ProductDetail;
