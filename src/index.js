import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalFonts from "./font/font";

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
