/************************************************
 * This example is one of many examples
 *         -= The React State Museum =-
 * View other state management options and read
 * more in the blog post and the master repo:
 *
 * https://github.com/GantMan/ReactStateMuseum
 ************************************************/
import React, { useState } from "react";
import { render } from "react-dom";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function App() {
  const [allItems, setItems] = useState(["nachos", "burritos", "hot dog"]);
  const clear = () => setItems([]);

  return (
    <div style={styles}>
      <h2>Welcome to useState</h2>
      <AddItems
          addItem={item => setItems([item, ...allItems])}
          clear={clear}
        />
      <ListItems allItems={allItems} />
    </div>
  )
}

render(<App />, document.getElementById("root"));
