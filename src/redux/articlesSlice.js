import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "./operations";

const initialValues = {
  articles: [],
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

export const articlesSlice = createSlice({
  name: "articlesSlice",
  initialState: initialValues,
  extraReducers: {
    [fetchArticles.pending]: handlePending,
    [fetchArticles.fulfilled](state, action) {
      state.isLoading = false;
      state.articles = action.payload;
      state.error = "";
    },
    [fetchArticles.rejected]: handleRejected,
  },
});
