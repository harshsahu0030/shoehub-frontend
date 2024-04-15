import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import {
  getProductReducer,
  getProductsReducer,
} from "./reducers/productReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    getProducts: getProductsReducer,
    getProduct: getProductReducer,
  },
});
