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
import { Provider } from "mobx-react";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";

import { ListStoreModel } from "./MST/listStore";
// first param of create is initial state (Optionals take care)
// second param is dependency injection(s)
const listStore = ListStoreModel.create();

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends Component {
  render() {
    return (
      <Provider listStore={listStore}>
        <div style={styles}>
          <h2>Welcome to MobX-State-Tree</h2>
          <AddItems />
          <ListItems />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
