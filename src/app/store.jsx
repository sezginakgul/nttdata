import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
});

export default store;
