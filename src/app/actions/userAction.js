import axios from "axios";
import {
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  VERIFIED_REGISTER_USER_FAIL,
  VERIFIED_REGISTER_USER_REQUEST,
  VERIFIED_REGISTER_USER_SUCCESS,
} from "../constants/userConstant";

// register
export const registerUserAction = (signupForm) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `https://shoehub-backend.onrender.com/api/v1/register`,
      signupForm,
      config
    );
    axios;
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// register
export const verifiedRegisterUserAction =
  (id, otpNumber) => async (dispatch) => {
    try {
      dispatch({ type: VERIFIED_REGISTER_USER_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `https://shoehub-backend.onrender.com/api/v1/register/${id}`,
        {
          otp: otpNumber,
        },
        config,
        { withCredentials: true }
      );
      dispatch({ type: VERIFIED_REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: VERIFIED_REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Login
export const loginUserAction = (loginForm) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `https://shoehub-backend.onrender.com/api/v1/login`,
      loginForm,
      config,
      { withCredentials: true }
    );
    axios;
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Load User
export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(
      `https://shoehub-backend.onrender.com/api/v1/load`
    );

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Logout User
export const logoutUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });

    const { data } = await axios.get(
      `https://shoehub-backend.onrender.com/api/v1/logout`,
      { withCredentials: true }
    );

    dispatch({ type: LOGOUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};
