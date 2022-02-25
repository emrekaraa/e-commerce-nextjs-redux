import { LOGIN_USER } from "../types";

export const isLoggedIn = (isLoggedIn) => ({
  type: LOGIN_USER,
  payload: isLoggedIn,
});
