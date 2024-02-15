import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import buildRootReducer from "./reducers/index";
// import { UserState } from "./reducers/user";
// import { UserAction } from "./actions/user";

// Define the initial state
const initialState = {
  user: {
    isAuth: false,
    user: null,
  },
};

// Create the Redux store
export default function configureStore(state = initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunk];

  return createStore(
    buildRootReducer(),
    state,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
