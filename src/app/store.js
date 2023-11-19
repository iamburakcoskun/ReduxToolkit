import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../features/posts/PostSlice"

const rootReducers = combineReducers({
  postReducer
});

export const setupStore = () => {
  return configureStore({
      reducer: rootReducers
  });
}