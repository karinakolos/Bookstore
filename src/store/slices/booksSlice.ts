import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooksStatus",
  async (params) => {
    const { search, currentPage } = params;
    const { data } = await axios.get(
      `https://api.itbook.store/1.0/search/${search}/${currentPage}`
    );
    return data;
  }
);

const initialState = {
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
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = "loading";
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchBooks.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = booksSlice.actions;
export default booksSlice.reducer;
