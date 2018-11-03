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
import createStore from "pure-store";
import AddItem from "./Components/AddItem";
import ListItems from "./Components/ListItems";

export const store = createStore({
  allItems: ["nachos", "burritos", "hot dog"],
  newItemName: ""
});

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends Component {  
  render() {
    return (
      <div style={styles}>
        <h2>Welcome to pure-store</h2>
        <AddItem />
        <ListItems />
      </div>
    );
  }
}

const renderApp = () => render(<App />, document.getElementById("root"));
store.subscribe(renderApp);

renderApp();
