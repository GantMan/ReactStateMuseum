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

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// Create our state model
class ListModel {
  allItems = [String];
  newItemText = String;
}

export default class App extends Component {
  render() {
    return (
      <State
        type={ListModel}
        value={{ allItems: ["nachos", "burritos", "hot dog"] }}
      >
        {list => (
          <div style={styles}>
            <h2>Welcome to Microstates</h2>
            <AddItems
              addItem={() =>
                list.allItems.push(list.state.newItemText).newItemText.set("")
              }
              setNewItemText={event => list.newItemText.set(event.target.value)}
              value={list.state.newItemText}
              clear={() => list.allItems.set([])}
            />
            <ListItems allItems={list.state.allItems} />
          </div>
        )}
      </State>
    );
  }
}

render(<App />, document.getElementById("root"));
