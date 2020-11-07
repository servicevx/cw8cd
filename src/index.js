import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import "./styles.css";
import './index.scss';
import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
