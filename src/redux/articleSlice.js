import { createSlice } from "@reduxjs/toolkit";
import { fetchArticleById } from "./operations";

const initialValues = {
  article: {},
  isLoading: false,
  error: "",
};

export const articleSlice = createSlice({
  name: "article",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
      state.error = "";
    });
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
