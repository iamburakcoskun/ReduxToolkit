import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learning redux toolkit", content: "bla bla bla" },
  { id: "2", title: "Slices..", content: "dla dla dla" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
