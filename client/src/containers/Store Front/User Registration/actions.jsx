import axios from "axios";
import { success } from "react-notification-system-redux";

import {
  SIGNUP_CHANGE,
  SIGNUP_RESET,
  SET_SIGNUP_SUBMITTING,
} from "./constants";

import { setAuth } from "../withAuthentication/actions";
import { setToken } from "../../../utils/token";
import { API_URL } from "../../../constants/index";

// Action Creators [signupChanges , signUp ]

export const signupChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  console.log("Action Dispatch");
  console.log("name", name);
  console.log("value", value);

  return {
    type: SIGNUP_CHANGE,
    payload: formData,
  };
};

export const signUp = () => {
  return async (dispatch, getState) => {
    try {
      //signup : import * as signup ==== in root action,jsx ********** signupFormData : from reducer
      const newUser = getState().signup.signupFormData;

      dispatch({ type: SET_SIGNUP_SUBMITTING, payload: true });

      const user = { ...newUser };

      const response = await axios.post(`${API_URL}/auth/register`, user); // change /auth/

      localStorage.setItem("token", response.data.token);

      setToken(response.data.token);

      const successfullOption = {
        title: "Successfully Registerded",
        position: "tr",
        autoDismiss: 1,
      };

      dispatch(setAuth());
      dispatch(success(successfullOption));
      dispatch({ type: SIGNUP_RESET });
    } catch (error) {
      return error;
    } finally {
      dispatch({ type: SET_SIGNUP_SUBMITTING, payload: false });
    }
  };
};

/**  dispatch : A function that triggrs an action .
 *              To update state in Redux store , first create an action object for describeing what happended (i.e SIGNUP_RESET) ,
                                                 then dispatch that action to the store,
                                                 then store passes the the action to reducer (which update the state)
*/
