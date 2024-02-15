// import { User } from "../actions/user";

// import { Dispatch } from "redux";

// import { Credentials } from "src/store/actions/user";

import { postUser } from "../../api/index";

export const attemptRegister = (newUser) => () => {
  return postUser(newUser);
};