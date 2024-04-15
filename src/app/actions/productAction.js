import axios from "axios";
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

// get products
export const getProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    const { data } = await axios.get(`/api/v1/products`);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get products
export const getProductAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//----------------------------------------------------------------
//add review
export const addReviewProductAction =
  (id, rating, comment) => async (dispatch) => {
    try {
      dispatch({ type: ADD_REVIEW_PRODUCT_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.put(
        `/api/v1/product/review/${id}`,
        {
          rating,
          comment,
        },
        config
      );

      dispatch({ type: ADD_REVIEW_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ADD_REVIEW_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//delete review
export const deleteReviewProductAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v1/product/review/${id}`);

    dispatch({ type: DELETE_REVIEW_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
