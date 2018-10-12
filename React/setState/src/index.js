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

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: ["nachos", "burritos", "hot dog"],
      newItemName: ""
    };
  }

  addItem = () => {
    this.setState(state => ({
      allItems: [...state.allItems, state.newItemName],
      newItemName: ""
    }));
  };

  setNewItemName = event => {
    this.setState({ newItemName: event.target.value });
  };

  clear = () => {
    this.setState({ allItems: [] });
  };

  render() {
    return (
      <div style={styles}>
        <h2>Welcome to setState</h2>
        <AddItems
          addItem={this.addItem}
          setNewItemText={this.setNewItemName}
          value={this.state.newItemName}
          clear={this.clear}
        />
        <ListItems allItems={this.state.allItems} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
