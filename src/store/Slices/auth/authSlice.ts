import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "John Smith",
    image: "http://foxtcon.kodextech.com/images/profile-1.jpg",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
