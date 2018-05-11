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

const App = view(() => {
  const { newItem, allItems, updateNewItemValue, addItem, clearItems } = items;

  return (
    <div>
      <h2>Welcome to React Easy State!</h2>
      <input
        type="text"
        value={newItem}
        onChange={e => updateNewItemValue(e.target.value)}
      />
      <button onClick={() => addItem("lala")}>Add Item</button>
      <button onClick={clearItems}>Clear Items</button>
      <ul>
        {allItems.map((item, index) => <li key={item + index}>{item}</li>)}
      </ul>
    </div>
  );
});

render(<App />, document.getElementById("root"));
