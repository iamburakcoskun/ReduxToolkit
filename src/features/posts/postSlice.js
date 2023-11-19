import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learning redux toolkit", content: "bla bla bla" },
  { id: "2", title: "Slices..", content: "dla dla dla" },
];

export const PostSlice = createSlice({
  name: "posts",
  initialState: { value: initialState },
  reducers: {},
});

export const postReducer = PostSlice.reducer;
