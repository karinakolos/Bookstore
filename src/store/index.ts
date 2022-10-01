import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import currentPage from "./slices/paginationSlice";
import cart from "./slices/cartSlice";
import books from "./slices/booksSlice";
import favorites from "./slices/favouritesSlice";
import search from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    currentPage: currentPage,
    cart,
    books,
    favorites,
    search,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
