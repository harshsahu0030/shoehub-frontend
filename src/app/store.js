import { configureStore } from "@reduxjs/toolkit";
import { userCartWishlistReducer, userReducer } from "./reducers/userReducer";
import {
  addDeleteReviewReducer,
  getProductReducer,
  getProductsReducer,
} from "./reducers/productReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    getProducts: getProductsReducer,
    getProduct: getProductReducer,
    productReview: addDeleteReviewReducer,
    userCartWishlist: userCartWishlistReducer,
  },
});
