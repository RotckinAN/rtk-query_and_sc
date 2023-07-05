import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./postsApi";
import messageSlice from "./messageSlice.js";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    metricMessage: messageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
