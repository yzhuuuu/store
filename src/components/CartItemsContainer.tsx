import CartCheckoutItem from '@/components/CartCheckoutItem.tsx';
import SubTotalPanel from '@/components/SubTotalPanel';
import useCartStore from '@/cartStore';

function CartItemsContainer() {
  const cartTotal = useCartStore((state) => state.cartTotal);
  return (
    <section className='grid md:grid-cols-[auto_minmax(auto,_350px)] md:space-x-5 lg:grid-cols-[auto_minmax(auto,_450px)]'>
      <CartCheckoutItem />
      {cartTotal !== 0 && <SubTotalPanel />}
    </section>
  );
}

export default CartItemsContainer;
