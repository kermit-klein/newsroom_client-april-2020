import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { StripeProvider } from 'react-stripe-elements'
import "./css/index.css";

axios.defaults.baseURL = "http://localhost:3000/api";

ReactDOM.render(
  <StripeProvider apiKey="pk_test_21nBNjeqdyB1Mzm2VjDPQprF00kyEKYZSK">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StripeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
