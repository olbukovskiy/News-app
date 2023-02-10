import { createSlice } from "@reduxjs/toolkit";
import { IArticles } from "types";
import { fetchArticles } from "./operations";

interface IArticlesState {
  articles: IArticles[];
  isLoading: boolean;
  error: any;
}

const initialValues: IArticlesState = {
  articles: [],
  isLoading: true,
  error: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
      state.error = null;
    });
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error;
      }
    });
  },
});
