import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  isbn13: string;
  image?: string;
  title?: string;
  subtitle?: string;
  priceToRedux: number;
  count: number;
};
interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (obj) => obj.isbn13 == action.payload.isbn13
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.priceToRedux * obj.count + sum;
      }, 0);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.isbn13 == action.payload);
      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          findItem.count = 1;
        }
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.priceToRedux * obj.count + sum;
      }, 0);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.isbn13 !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.priceToRedux * obj.count + sum;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
