import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth";
import { postSlice } from "./slice/post";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    post: postSlice.reducer,
  },
});

export default store;