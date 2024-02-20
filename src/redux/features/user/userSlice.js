import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Shohidul Arifin",
  email: "shohidul@gmail.com",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
