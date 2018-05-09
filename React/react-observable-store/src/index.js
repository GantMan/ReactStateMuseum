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
import { SimpleList, AddPackingItem } from "packlist-components";
import withStore, { addItem, updateInput, clearAll } from "./store";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends Component {
  render() {
    const { allItems, newItemName } = this.props;
    return (
      <div style={styles}>
        <h2>Welcome to ReactObservableStore</h2>

        <AddPackingItem
          addItem={addItem}
          setNewItemText={updateInput}
          value={newItemName}
          clear={clearAll}
        />

        <SimpleList value={allItems} />
      </div>
    );
  }
}

const AppWithStore = withStore('museum', App);
const renderApp = () => render(<AppWithStore />, document.getElementById("root"));

renderApp();
