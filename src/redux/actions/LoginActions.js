import { LOGIN_USER_INFO, LOGIN_USER } from "../types";

export const isLoggedIn = (isLoggedIn) => ({
  type: LOGIN_USER,
  payload: isLoggedIn,
});

export const loginUserInfo = (userName, userEmail) => ({
  type: LOGIN_USER_INFO,
  payload: { userName: userName, userEmail: userEmail },
});
