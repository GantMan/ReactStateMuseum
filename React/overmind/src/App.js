import React from "react";

import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => {
  return (
    <div style={styles}>
      <h2>Welcome to Overmind</h2>
      <AddItems />
      <ListItems />
    </div>
  );
};

export default App;
