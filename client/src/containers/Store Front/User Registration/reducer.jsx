import {
  SIGNUP_CHANGE,
  SIGNUP_RESET,
  SET_SIGNUP_SUBMITTING,
} from "./constants";

// initialState
const initialState = {
  signupFormData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },

  isSubmitting: false,
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_CHANGE:
      return {
        ...state,
        signupFormData: { ...state.signupFormData, ...action.payload },
      };

    case SIGNUP_RESET:
      return {
        ...state,
        signupFormData: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        },
      };

    case SET_SIGNUP_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload,
      };

    default:
      return state;
  }
};
