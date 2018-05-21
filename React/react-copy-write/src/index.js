/************************************************
 * This example is one of many examples
 *         -= The React State Museum =-
 * View other state management options and read
 * more in the blog post and the master repo:
 *
 * https://github.com/GantMan/ReactStateMuseum
 ************************************************/
import React from "react";
import { render } from "react-dom";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";
import {
  Provider,
  Consumer,
  addItem,
  clearItems,
  setNewItemText
} from "./store";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

render(
  <Provider>
    <Consumer>
      {({ allItems, newItem }) => (
        <div style={styles}>
          <h2>Welcome to React Copy Write!</h2>
          <AddItems
            addItem={addItem}
            setNewItemText={event => setNewItemText(event.target.value)}
            value={newItem}
            clear={clearItems}
          />
          <ListItems allItems={allItems} />
        </div>
      )}
    </Consumer>
  </Provider>,
  document.getElementById("root")
);
