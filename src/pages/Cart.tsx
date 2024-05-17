import CartItemsContainer from '@/components/CartItemsContainer.tsx';
import useCartStore from '@/cartStore';

function Cart() {
  const cartItem = useCartStore((state) => state.cartItems);
  console.log(cartItem);

  return (
    <main className='align-element py-8 '>
      <h2
        className={
          'text-2xl font-semibold tracking-wide  border-b-[1.5px] pb-8 mb-8'
        }
      >
        Shopping Cart
      </h2>
      <CartItemsContainer />
    </main>
  );
}

export default Cart;
