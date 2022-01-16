import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalFonts from "./assets/fonts/font";

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
