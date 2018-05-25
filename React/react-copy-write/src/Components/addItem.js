import React from "react";
import { AddPackingItem } from "packlist-components";
import { Consumer, addItem, setNewItemText, clearItems } from "../store";

export default () => (
  <Consumer selector={state => state.newItem}>
    {newItem => (
      <AddPackingItem
        addItem={addItem}
        clear={clearItems}
        setNewItemText={event => setNewItemText(event.target.value)}
        value={newItem}
      />
    )}
  </Consumer>
);
