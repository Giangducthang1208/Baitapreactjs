import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";
import userReducer from "./reducer/userReducer";

export const store = configureStore({
    reducer: {
      product: productReducer,
      userReducer: userReducer,
    },
  });