import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginateState {
  currentPage: number;
}

const initialState: PaginateState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
