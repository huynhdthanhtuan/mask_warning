import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScreensRoot from "./screens/root";
import GlobalStyle from "./components/GlobalStyle";
import { initialLocalStorageConfig } from "./components/Auth";

function App() {
  return (
    <GlobalStyle>
      <BrowserRouter>
        {initialLocalStorageConfig()}
        <ScreensRoot />
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default App;
