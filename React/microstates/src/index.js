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
import State from "@microstates/react";
import List from "./list";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends Component {
  render() {
    return (
      <State
        type={List}
        value={{ allItems: ["nachos", "burritos", "hot dog"] }}
      >
        {list => (
          <div style={styles}>
            <h2>Welcome to Microstates</h2>
            <AddItems
              addItem={() => list.addItem()}
              setNewItemText={event => list.setNewItemText(event.target.value)}
              value={list.state.newItemText}
              clear={() => list.clear()}
            />
            <ListItems allItems={list.state.allItems} />
          </div>
        )}
      </State>
    );
  }
}

render(<App />, document.getElementById("root"));
