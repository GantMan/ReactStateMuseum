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
import createStore from "pure-store";


const store = createStore({
  allItems: ["nachos", "burritos", "hot dog"],
  newItemName: ""
});

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends Component {
  addItem = () => {
    store.update(state => {
      state.allItems.push(state.newItemName)
      state.newItemName = ""
    });
  };

  setName = e => store.update({ newItemName: e.target.value });
  clear   = ()=> store.update({ allItems: [] });

  render() {
    return (
      <div style={styles}>
        <h2>Welcome to pure-store</h2>

        <AddPackingItem
          addItem={this.addItem}
          setNewItemText={this.setName}
          value={store.state.newItemName}
          clear={this.clear}
        />

        <SimpleList value={store.state.allItems} />
      </div>
    );
  }
}

const renderApp = () => render(<App />, document.getElementById("root"));
store.subscribe(renderApp);

renderApp();
