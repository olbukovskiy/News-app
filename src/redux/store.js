import { configureStore } from "@reduxjs/toolkit";

import { articlesSlice } from "./articlesSlice";
import { articleSlice } from "./articleSlice";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
  reducer: {
    [articlesSlice.name]: articlesSlice.reducer,
    [articleSlice.name]: articleSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
});
