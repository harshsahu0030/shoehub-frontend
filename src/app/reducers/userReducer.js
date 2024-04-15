import {
  CLEAR_ERRORS,
  CLEAR_MESSAGES,
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

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
    case REGISTER_USER_REQUEST:
    case VERIFIED_REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        message: action.payload.message,
        otp: action.payload.otp,
      };

    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
    case VERIFIED_REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        message: action.payload.message,
        user: action.payload.user,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: true,
      };

    case LOGIN_FAIL:
    case LOAD_USER_FAIL:
    case REGISTER_USER_FAIL:
    case VERIFIED_REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        message: action.payload.message,
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
