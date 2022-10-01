import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FavoriteItem = {
  isbn13: string;
  image?: string;
  title?: string;
  price: string;
};
interface FavoriteSliceState {
  items: FavoriteItem[];
}

const initialState: FavoriteSliceState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteItem(state, action: PayloadAction<FavoriteItem>) {
      const findItem = state.items.find(
        (obj) => obj.isbn13 == action.payload.isbn13
      );
      if (findItem) {
        state.items = state.items.filter(
          (obj) => obj.isbn13 !== action.payload.isbn13
        );
      } else {
        state.items.push({
          ...action.payload,
        });
      }
    },
  },
});

export const { addFavoriteItem } = favoritesSlice.actions;
export default favoritesSlice.reducer;
