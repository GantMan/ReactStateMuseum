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
import { Provider, connect } from "unistore/react";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";
import { store, actions } from "./store";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = connect("allItems", actions)(
  ({ allItems, addItem, clearItems, newItem, setNewItemText }) => (
    <div style={styles}>
      <h2>Welcome to React Easy State!</h2>
      <AddItems
        addItem={addItem}
        setNewItemText={event => setNewItemText(event.target.value)}
        value={newItem}
        clear={clearItems}
      />
      <ListItems allItems={allItems} />
    </div>
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
