import { SET_USER } from "../actions/user";

const initialState = {
  isAuth: false,
  user: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
}
