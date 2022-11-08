import React from "react";
import ReactDOM from "react-dom/client";
import App from "./container/App";
//* --> Global styles
import "../src/assets/styles/global.scss";
//* --> Route Configure
import { BrowserRouter } from "react-router-dom";
//* --> Store Provider - Redux
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
