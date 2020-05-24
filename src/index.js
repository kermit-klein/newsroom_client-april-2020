import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "./css/Header.css";

axios.defaults.baseURL = "https://newsroom-april2020-api.herokuapp.com/api";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
