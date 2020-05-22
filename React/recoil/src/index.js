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
import { RecoilRoot } from "recoil";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function App() {
  return (
    <RecoilRoot>
      <div style={styles}>
        <h2>Welcome to recoil</h2>
        <AddItems />
        <ListItems />
      </div>
    </RecoilRoot>
  );
}

render(<App />, document.getElementById("root"));
