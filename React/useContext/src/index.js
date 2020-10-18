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
import AppContext from "./context/AppContext";
import ItemsController from "./components/ItemsController";
import ItemsList from "./components/ItemsList";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const App = () => {
  const [items, setItems] = useState(["Pizza", "Falafel", "Sushi"]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <AppContext.Provider
      value={{
        addItem: handleAddItem,
        clearItems: handleClearItems,
        items,
      }}
    >
      <div style={styles}>
        <h2>Welcome to React.useContext!</h2>
        <ItemsController />
        <ItemsList />
      </div>
    </AppContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
