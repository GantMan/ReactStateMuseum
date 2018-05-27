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
import { Provider, Subscribe } from "react-contextual";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";
import { store } from "./store";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

render(
  <Provider store={store}>
    <Subscribe to={store}>
      {props => (
        <div style={styles}>
          <h2>Welcome to react-contextual</h2>
          <AddItems {...props} />
          <ListItems {...props} />
        </div>
      )}
    </Subscribe>
  </Provider>,
  document.getElementById("root")
);
