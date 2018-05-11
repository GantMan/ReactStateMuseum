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
import { store, actions } from "./store";

const App = connect("allItems", actions)(
  ({ allItems, addItem, clearItems, newItem, setNewItemValue }) => (
    <div>
      <h2>Welcome to Unistore!</h2>
      <input
        type="text"
        value={newItem}
        onChange={e => setNewItemValue({ value: e.target.value })}
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={clearItems}>Clear Items</button>
      <ul>
        {allItems.map((item, index) => <li key={item + index}>{item}</li>)}
      </ul>
    </div>
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
