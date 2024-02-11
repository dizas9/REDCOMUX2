import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Application from "./containers/Store Front/Application/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </>
  );
}

export default App;
