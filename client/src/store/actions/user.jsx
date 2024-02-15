// export const LOGIN_USER = "LOGIN_USER";
// export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER";
// export const RESET_USER = "RESET_USER";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}
