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
import { Provider, connect } from "react-redux";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";
import store from "./store";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Items = ({ allItems, newItem, addItem, clearItems, setNewItemText }) => (
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
);

const mapState = models => ({
  allItems: models.items.allItems,
  newItem: models.items.newItem
});

const mapDispatch = models => ({
  addItem: models.items.addItem,
  clearItems: models.items.clearItems,
  setNewItemText: models.items.setNewItemText
});

const App = connect(mapState, mapDispatch)(Items);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
