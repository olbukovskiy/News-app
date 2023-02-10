import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from "types";
import { fetchArticleById } from "./operations";

interface IArticleState {
  article: IArticle;

  isLoading: boolean;
  error: any;
}

const initialValues: IArticleState = {
  article: {},
  isLoading: false,
  error: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
      state.error = null;
    });
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error;
      }
    });
  },
});
