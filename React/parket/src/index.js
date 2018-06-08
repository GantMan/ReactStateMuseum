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
import { Provider } from "parket/react";
import ListItems from "./Components/listItems";
import AddItem from "./Components/addItem";
import { store } from "./models";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

render(
  <Provider store={store}>
    <div style={styles}>
      <h2>Welcome to Parket!</h2>
      <AddItem />
      <ListItems />
    </div>
  </Provider>,
  document.getElementById("root")
);
