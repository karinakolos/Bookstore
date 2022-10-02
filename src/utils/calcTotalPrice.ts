import { CartItem } from "../store/slices/cartSlice";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.priceToRedux * obj.count + sum, 0);
};
