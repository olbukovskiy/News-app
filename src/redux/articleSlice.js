import { createSlice } from "@reduxjs/toolkit";
import { fetchArticleById } from "./operations";

const initialValues = {
  article: {},
  isLoading: false,
  error: "",
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const articleSlice = createSlice({
  name: "articleSlice",
  initialState: initialValues,
  extraReducers: {
    [fetchArticleById.pending]: handlePending,
    [fetchArticleById.fulfilled](state, action) {
      state.isLoading = false;
      state.article = action.payload;
      state.error = "";
    },
    [fetchArticleById.rejected]: handleRejected,
  },
});
