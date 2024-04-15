import {
  ADD_REVIEW_PRODUCT_FAIL,
  ADD_REVIEW_PRODUCT_REQUEST,
  ADD_REVIEW_PRODUCT_SUCCESS,
  DELETE_REVIEW_PRODUCT_FAIL,
  DELETE_REVIEW_PRODUCT_REQUEST,
  DELETE_REVIEW_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../constants/productConstatnt";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../constants/userConstant";

export const getProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        loading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };

    case GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case CLEAR_MESSAGES:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export const getProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload.product,
      };

    case GET_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case CLEAR_MESSAGES:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export const addDeleteReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_REVIEW_PRODUCT_REQUEST:
    case DELETE_REVIEW_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case ADD_REVIEW_PRODUCT_SUCCESS:
    case DELETE_REVIEW_PRODUCT_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };

    case ADD_REVIEW_PRODUCT_FAIL:
    case DELETE_REVIEW_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case CLEAR_MESSAGES:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
