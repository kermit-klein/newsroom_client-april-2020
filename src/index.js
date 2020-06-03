import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";
import "./css/index.css";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";

axios.defaults.baseURL = "http://localhost:3000/api";
const store = configureStore();
if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = process.env.REACT_APP_HEROKUURL;
} else if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = process.env.REACT_APP_LOCALURL;
  let apiKey = process.env.REACT_APP_API_KEY;
}

ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey={apiKey}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StripeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
