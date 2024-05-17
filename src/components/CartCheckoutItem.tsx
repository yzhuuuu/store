import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

import { formatAsDollars } from '@/utils/types';
import useCartStore from '@/cartStore';
import { useState } from 'react';

function CartCheckoutItem() {
  const cartItem = useCartStore((state) => state.cartItems);
  const removeItemFromCart = useCartStore((state) => state.removeItemFromCart);
  const updateAmount = useCartStore((state) => state.updateAmount);
  const [, setSelectAmount] = useState(0);
  return (
    <div>
      {cartItem.map((item) => {
        return (
          <div
            className='grid grid-cols-1 p-12 space-y-8 lg:grid-cols-4 border-[1px] border-solid  lg:px-6 md:py-8 rounded-lg shadow-sm mb-8 capitalize lg::gap-y-4 lg::space-y-0 lg::space-x-8'
            key={item.id}
          >
            <div className=''>
              <img
                src={item.attributes.image}
                alt={item.attributes.title}
                className='w-36 h-36 object-cover rounded-md'
              />
            </div>
            <div className='ml-4 flex flex-col '>
              <h3 className='text-lg font-semibold'>{item.attributes.title}</h3>
              <h4>{item.attributes.company}</h4>
              <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
                color :
                <span
                  className='h-4 w-4 rounded-full inline-block'
                  style={{ backgroundColor: `${item.currentColor}` }}
                ></span>
              </p>
            </div>
            <div className='space-y-4'>
              <p>amount : </p>
              <Select
                onValueChange={(value) => {
                  setSelectAmount(Number(value));
                  updateAmount(item, Number(value));
                }}
              >
                <SelectTrigger className='w-[80px]'>
                  <SelectValue placeholder={item.amount} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Array.from({ length: 8 }, (_, i) => {
                      return (
                        <SelectItem value={String(i + 1)} key={i}>
                          {i + 1}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <button
                className='text-primary'
                onClick={() => removeItemFromCart(item)}
              >
                Remove
              </button>
            </div>
            <div className='lg:justify-self-end font-semibold'>
              <p>{formatAsDollars(item.attributes.price)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartCheckoutItem;
