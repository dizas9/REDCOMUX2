import { SET_AUTH, CLEAR_AUTH } from "./constants";

//initial State

const initialState = {
  authenticated: false,
};

//Reducer Function

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        authenticated: true,
      };

    case CLEAR_AUTH:
      return {
        ...state,
        authenticated: false,
      };

    default:
      return state;
  }
};
