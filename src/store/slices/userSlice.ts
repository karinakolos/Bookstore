import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
  name: null,
  password: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.password = action.payload.password;
    },
    resetUserPassword(state, action) {
      state.password = action.payload.password;
    },
    resetUserName(state, action) {
      state.name = action.payload.name;
    },
    resetUserEmail(state, action) {
      state.email = action.payload.email;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.password = null;
      state.name = null;
    },
  },
});

export const {
  setUser,
  removeUser,
  resetUserName,
  resetUserEmail,
  resetUserPassword,
} = userSlice.actions;
export default userSlice.reducer;
