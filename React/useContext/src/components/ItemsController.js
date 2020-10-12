import React, { useContext, useState } from "react";
import { AddPackingItem } from "packlist-components";
import AppContext from "../context/AppContext";

const ItemsController = () => {
  const { addItem, clearItems } = useContext(AppContext);

  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <AddPackingItem
      addItem={handleAddItem}
      clear={clearItems}
      setNewItemText={(event) => setNewItemName(event.target.value)}
      value={newItemName}
    />
  );
};

export default ItemsController;
