/************************************************
 * This example is one of many examples
 *         -= The React State Museum =-
 * View other state management options and read
 * more in the blog post and the master repo:
 *
 * https://github.com/GantMan/ReactStateMuseum
 ************************************************/
import React, { useEffect } from "react";
import { render } from "react-dom";

import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";

import { fetchData } from "./model"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function App() {
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={styles}>
      <h2>Welcome to Effector</h2>
      <AddItems />
      <ListItems />
    </div>
  );
}

render(<App />, document.getElementById("root"));
