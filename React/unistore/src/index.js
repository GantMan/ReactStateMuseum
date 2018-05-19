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
import { Provider } from "unistore/react";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";
import { store } from "./store";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

render(
  <Provider store={store}>
    <div style={styles}>
      <h2>Welcome to unistore</h2>
      <AddItems />
      <ListItems />
    </div>
  </Provider>,
  document.getElementById("root")
);
