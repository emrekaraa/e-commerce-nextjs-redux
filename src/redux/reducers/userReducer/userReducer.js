import { LOGIN_USER_INFO } from "@/redux/types";

const initialState = { userName: "", userEmail: "" };

export const LoginUserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_INFO:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
