import { ProductTypes } from '@/utils/types.ts';
import { create } from 'zustand';

interface CartState {
  cartTotal: number;
  cartItems: ProductTypes[];
  addItemToCart: (cart: ProductTypes) => void;
  updateAmount: (cart: ProductTypes, amount: number) => void;
  removeItemFromCart: (cart: ProductTypes) => void;
}
const useCartStore = create<CartState>((set) => ({
  cartTotal: 0,
  cartItems: [],
  addItemToCart: (cart: ProductTypes) =>
    set((state) => ({
      ...state,
      cartItems: [...state.cartItems, cart],
      cartTotal: state.cartTotal + (cart.amount || 0),
    })),
  removeItemFromCart: (cart: ProductTypes) =>
    set((state) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== cart.id
      );
      const removedItem = state.cartItems.find((item) => item.id === cart.id);
      const updatedCartTotal = state.cartTotal - (removedItem?.amount || 0);
      return {
        ...state,
        cartItems: newCartItems,
        cartTotal: updatedCartTotal,
      };
    }),
  updateAmount: (cart: ProductTypes, amount: number) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === cart.id ? { ...item, amount } : item
      );

      const newTotal = state.cartItems.reduce((acc, item) => {
        if (item.amount === undefined) {
          return acc;
        }
        return acc + Number(item.amount);
      }, 0);
      return {
        ...state,
        cartItems: [...updatedCartItems],
        cartTotal: newTotal,
      };
    }),
}));

export default useCartStore;
