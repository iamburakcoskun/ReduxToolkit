import { configureStore } from "@reduxjs/toolkit";
import postreducer from "../features/posts/postSlice";

const reduxStore = configureStore({
  reducer: {
    posts: postreducer,
  },
});

export default reduxStore;
