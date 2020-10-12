import React from "react";
import { AddPackingItem } from "packlist-components";
import { usePackingContext } from "../Constate/packingContext";

export default () => {
  const { addItem, clearItems, newItem, setNewItemText } = usePackingContext();

  return (
    <AddPackingItem
      addItem={addItem}
      clear={clearItems}
      setNewItemText={(event) => setNewItemText(event.target.value)}
      value={newItem}
    />
  );
};
