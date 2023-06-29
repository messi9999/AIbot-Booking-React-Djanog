import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  PAYMENT_VERIFIED
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, isPayment: true, user }
  : { isLoggedIn: false, isPayment: false, user: null };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isPayment: true
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isPayment: true,
        user: payload.user
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isPayment: false,
        user: null
      };
    case PAYMENT_VERIFIED:
      return {
        ...state,
        isPayment: true
      };

    default:
      return state;
  }
}
