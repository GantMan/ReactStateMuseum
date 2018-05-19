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
import { view } from "react-easy-state";
import { items } from "./store";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = view(() => {
  const { newItem, allItems, setNewItemValue, addItem, clearItems } = items;

  return (
    <div style={styles}>
      <h2>Welcome to React Easy State!</h2>
      <AddItems
        addItem={addItem}
        setNewItemText={event => setNewItemValue(event.target.value)}
        value={newItem}
        clear={clearItems}
      />
      <ListItems allItems={allItems} />
    </div>
  );
});

render(<App />, document.getElementById("root"));
