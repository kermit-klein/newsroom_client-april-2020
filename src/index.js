import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "./css/Index.css";

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = process.env.REACT_APP_HEROKUURL;
} else if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = process.env.REACT_APP_LOCALURL;
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
