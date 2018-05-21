import React from "react";
import { AddPackingItem } from "packlist-components";

export default ({ addItem, clearItems, newItem, setNewItemText }) => (
  <AddPackingItem
    addItem={addItem}
    setNewItemText={event => setNewItemText(event.target.value)}
    value={newItem}
    clear={clearItems}
  />
);
