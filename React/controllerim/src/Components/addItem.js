import React from "react";
import { AddPackingItem } from "packlist-components";

export default ({ newItem, setNewItemText, addItem, clearItems }) => (
  <AddPackingItem
    addItem={addItem}
    setNewItemText={event => setNewItemText(event.target.value)}
    value={newItem}
    clear={clearItems}
  />
);
