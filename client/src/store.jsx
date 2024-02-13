/** Central Store */

import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk  from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";

import createReducer from "./reducers";

export const history = createBrowserHistory({
  basename: "/",
  hashType: "nolash",
});

const middlewares = [thunk, routerMiddleware(history)]; // Use router middleware from react-router-redux

const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  createReducer(history),
  composeEnhancers(...enhancers)
);

// if (module.hot) {
//   module.hot.accept("./reducers", () => {
//     const nextRootReducer = require("./reducers").default;
//     store.replaceReducer(nextRootReducer(history));
//   });
// }

export default store;
