import { combineReducers } from "redux";
// import { connectRouter } from "react-router-redux";
import { reducer as notifications } from "react-notification-system-redux";

//import Reducers

import {signupReducer} from "./containers/Store Front/User Registration/reducer";
import {authenticationReducer} from "./containers/Store Front/withAuthentication/reducer";

const createReducer = () =>
  combineReducers({
    notifications,
    signup: signupReducer,
    authentication: authenticationReducer,
  });

export default createReducer;
