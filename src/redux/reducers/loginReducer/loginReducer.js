import { LOGIN_USER } from "@/redux/types";
import { parseCookies } from "nookies";
const cookies = parseCookies();

const initialState = { isLoggedIn: false };

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLoggedIn: action.payload };

    default:
      return state;
  }
};
