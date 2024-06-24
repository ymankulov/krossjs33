import { configureStore } from "@reduxjs/toolkit";
import AddProductSlice from "./addProductSlice";

export const store = configureStore({
  reducer: {
    pro: AddProductSlice,
  },
});
