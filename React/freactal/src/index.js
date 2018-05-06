/************************************************
 * This example is one of many examples
 *         -= The React State Museum =-
 * View other state management options and read
 * more in the blog post and the master repo:
 *
 * https://github.com/GantMan/ReactStateMuseum
 ************************************************/
import React, { Component } from "react";
import { render } from "react-dom";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";
import { withState } from "./State/listWrap";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export const App = () => {
  return (
    <div style={styles}>
      <h2>Welcome to Freactal</h2>
      <AddItems />
      <ListItems />
    </div>
  );
};

const AppWithState = withState(App);

render(<AppWithState />, document.getElementById("root"));
