import React, { createContext, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { reducer, initialState } from "./reducers/userReducer";
import { ForgotPasswordContextProvider } from "./contexts/ForgotPasswordContext";
import { ModalStatusContextProvider } from "./contexts/ModalStatusContext";
import ScreensRoot from "./screens/root";
import GlobalStyle from "./components/GlobalStyle";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <GlobalStyle>
        <ToastContainer position="top-center" autoClose={1000} type="default" />
        <BrowserRouter>
          <ForgotPasswordContextProvider>
            <ModalStatusContextProvider>
              <ScreensRoot />
            </ModalStatusContextProvider>
          </ForgotPasswordContextProvider>
        </BrowserRouter>
      </GlobalStyle>
    </UserContext.Provider>
  );
}

export default App;
