/************************************************
 * This example is one of many examples
 *         -= The React State Museum =-
 * View other state management options and read
 * more in the blog post and the master repo:
 *
 * https://github.com/GantMan/ReactStateMuseum
 ************************************************/
import React from "react";
import { Component } from "react-simplified";
import { render } from "react-dom";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  allItems = ["nachos", "burritos", "hot dog"];
  newItemName = "";

  addItem() {
    this.allItems.push(this.newItemName);
    this.newItemName = "";
  }

  setNewItemName(event) {
    this.newItemName = event.target.value;
  }

  clear() {
    this.allItems = [];
  }

  render() {
    return (
      <div style={styles}>
        <h2>Welcome to react-simplified</h2>
        <AddItems
          addItem={this.addItem}
          setNewItemText={this.setNewItemName}
          value={this.newItemName}
          clear={this.clear}
        />
        <ListItems allItems={this.allItems} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
