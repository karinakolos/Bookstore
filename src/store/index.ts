import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import currentPage from "./slices/paginationSlice";
import cart from "./slices/cartSlice";
import books from "./slices/booksSlice";
import favorites from "./slices/favouritesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    currentPage: currentPage,
    cart,
    books,
    favorites,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
