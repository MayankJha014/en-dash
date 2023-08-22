import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: null,
    isError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(postSlice.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postSlice.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(postSlice.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});
