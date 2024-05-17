import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import useCartStore from '@/cartStore';

function CartButton() {
  const cartTotal = useCartStore((state) => state.cartTotal);
  return (
    <div>
      <Button asChild size={'icon'} variant={'outline'}>
        <Link to={'/cart'} className={'relative'}>
          <ShoppingCart />
          <span
            className={
              'absolute -top-2 -right-2 bg-primary rounded-full px-1 text-white'
            }
          >
            {cartTotal}
          </span>
        </Link>
      </Button>
    </div>
  );
}

export default CartButton;
