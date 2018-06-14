import React from "react";
import { AddPackingItem } from "packlist-components";
import { ItemsContainer } from "../container";

export default () => (
  <ItemsContainer context="items">
    {({ newItem, addItem, clearItems, setNewItemText }) => (
      <AddPackingItem
        addItem={addItem}
        clear={clearItems}
        setNewItemText={event => setNewItemText(event.target.value)}
        value={newItem}
      />
    )}
  </ItemsContainer>
);
