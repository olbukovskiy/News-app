import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState: "",
  reducers: {
    filterArticles(_, action) {
      return action.payload;
    },
  },
});

export const { filterArticles } = filterSlice.actions;
