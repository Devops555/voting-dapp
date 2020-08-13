import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import './App.css';
import "./assets/scss/style.scss";

const history = createBrowserHistory();

ReactDOM.render(
  <Auth0Provider
    domain="process.env.DOMAIN"
    clientId="process.env.CLIENT_ID"
    redirectUri={window.location.origin}
  >
    <Router history={history}>
      <App />
    </Router>
  </Auth0Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
