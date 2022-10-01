import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";

type FetchBooksArgs = {
  search: string;
  currentPage: number;
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooksStatus",
  async (params: FetchBooksArgs) => {
    const { search, currentPage } = params;
    const { data } = await axios.get(
      `https://api.itbook.store/1.0/search/${search}/${currentPage}`
    );
    return data as BookItem[];
  }
);

export type Book = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
};
type BookItem = {
  error: string;
  totaO: string;
  page: string;
  books: Book[];
};
interface BookSliceState {
  items: BookItem[];
  status: "loading" | "success" | "error";
}

const initialState: BookSliceState = {
  items: [],
  status: "loading",
};
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setItems } = booksSlice.actions;
export default booksSlice.reducer;
