import { LOGIN_USER } from "@/redux/types";

const initialState = { isLoggedIn: false };

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLoggedIn: action.payload };

    default:
      return state;
  }
};
