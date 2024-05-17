import { formatAsDollars } from '@/utils/types';
import useCartStore from '@/cartStore';

function SubTotalPanel() {
  const cartItems = useCartStore((state) => state.cartItems);
  const subTotal = cartItems.reduce((acc, item) => {
    if (item.amount === undefined) {
      return acc;
    }
    return acc + Number(item.amount) * Number(item.attributes.price);
  }, 0);
  return (
    <div>
      <div className='bg-accent px-6 py-8 rounded-md capitalize space-y-2'>
        <div className='flex justify-between pb-2 border-b-[1.5px]'>
          <p>subtotal</p>
          <p>{formatAsDollars(subTotal)}</p>
        </div>
        <div className='flex justify-between pb-2 border-b-[1.5px]'>
          <p>Shipping</p>
          <p>$ 0</p>
        </div>
        <div className='flex justify-between pb-2 border-b-[1.5px]'>
          <p>tax</p>
          <p>{formatAsDollars(subTotal * 0.0875)}</p>
        </div>
        <div className='flex justify-between '>
          <p>Order total </p>
          <p>{formatAsDollars(subTotal * 0.0875 + subTotal)}</p>
        </div>
      </div>
    </div>
  );
}

export default SubTotalPanel;
