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
import { Provider } from "constate";
import AddItem from "./Components/addItem";
import ListItems from "./Components/listItems";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

render(
  <Provider>
    <div style={styles}>
      <h2>Welcome to React Copy Write!</h2>
      <AddItem />
      <ListItems />
    </div>
  </Provider>,
  document.getElementById("root")
);
