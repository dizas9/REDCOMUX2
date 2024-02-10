import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Application from "./containers/Application/index";
import Page404 from "./components/Website/Page404/index";

function App() {

  return (
    <>
    <BrowserRouter>
    <Application/>
    </BrowserRouter>
    </>
  );
}

export default App;
