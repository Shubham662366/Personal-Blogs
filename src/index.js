import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvide from './context1/AppContextApp.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvide>
    <App />
  </AppContextProvide>
);
