import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterArticles(_, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export const { filterArticles } = filterSlice.actions;
