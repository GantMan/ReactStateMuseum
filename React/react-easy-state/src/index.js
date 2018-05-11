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

const styles = {
  div: {
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  ul: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 0
  },
  li: {
    borderBottom: "1px solid blue",
    display: "block",
    padding: "7.5px 2.5px 5px",
    width: "100px",
    margin: "0 30%"
  },
  input: {
    backgroundColor: "#7a7eff",
    padding: "7.5px"
  },
  addButton: {
    backgroundColor: "#ccfecc",
    borderRadius: "4px",
    margin: "2px 5px",
    padding: "7.5px"
  },
  cleanButton: {
    backgroundColor: "#feaaaa",
    borderRadius: "4px",
    margin: "2px 5px",
    padding: "7.5px"
  }
};

const App = view(() => {
  const { newItem, allItems, setNewItemValue, addItem, clearItems } = items;

  return (
    <div style={styles.div}>
      <h2>Welcome to React Easy State!</h2>
      <input
        type="text"
        style={styles.input}
        value={newItem}
        onChange={e => setNewItemValue(e.target.value)}
      />
      <button style={styles.addButton} onClick={addItem}>
        Add Item
      </button>
      <button style={styles.cleanButton} onClick={clearItems}>
        Clear Items
      </button>
      <ul style={styles.ul}>
        {allItems.map((item, index) => (
          <li key={item + index} style={styles.li}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

render(<App />, document.getElementById("root"));
