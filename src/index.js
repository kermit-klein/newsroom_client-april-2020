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
ReactDOM.render(
  <StripeProvider apiKey="pk_test_21nBNjeqdyB1Mzm2VjDPQprF00kyEKYZSK">
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StripeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
