/************************************************
 * This example is one of many examples
 *         -= The React State Museum =-
 * View other state management options and read
 * more in the blog post and the master repo:
 *
 * https://github.com/GantMan/ReactStateMuseum
 ************************************************/
import React from "react";
import { render } from "react-dom";
import { Provider } from "overmind-react";

import App from "./App";
import { overmind } from "./Overmind/store";

render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById("root")
);
