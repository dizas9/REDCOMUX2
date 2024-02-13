import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Application from "./containers/Store Front/Application/index";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Application />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
