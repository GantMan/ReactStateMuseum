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
import AddItems from "./Components/addItem";
import ListItems from "./Components/listItems";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends Component {
  render() {
    return (
      <div style={styles}>
        <h2>Welcome to remx</h2>
        <AddItems />
        <ListItems />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
