import { create } from "zustand";
import { ProductTypes } from "@/utils/types.ts";

interface CartState {
  cartTotal: number;
  cartItems: ProductTypes[];
  shipping?: number;
  subtotal: number;
}
const cartStore = create<CartState>()((set) => ({
  cartTotal: 0,
  cartItems: [],
  subtotal: 0,
}));

export default cartStore;
