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
import { State, withStatechart } from "react-automata";
import statechart from "./Statecharts/index";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export class App extends Component {
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

  setNewItemName = value => {
    this.setState({ newItemName: this.props.value });
  };

  clear = () => {
    this.setState({ allItems: [] });
  };

  handAddItem = () => this.props.transition("ADD_ITEM");
  handleSetNewItemName = event => {
    this.props.transition("SET_NEW_ITEM_NAME", { value: event.target.value });
  };
  handleClear = () => this.props.transition("CLEAR");

  render() {
    return (
      <div style={styles}>
        <h2>Welcome to setState + react-automata</h2>
        <State value="idle">Current State 'idle'</State>
        <State value="loaded">Current State 'loaded'</State>
        <AddItems
          addItem={this.handAddItem}
          setNewItemText={this.handleSetNewItemName}
          value={this.state.newItemName}
          clear={this.handleClear}
        />
        <ListItems allItems={this.state.allItems} />
      </div>
    );
  }
}

const WrappedWithChart = withStatechart(statechart)(App);
export default WrappedWithChart;

render(<WrappedWithChart />, document.getElementById("root"));
