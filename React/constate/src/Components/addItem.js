import React from "react";
import { AddPackingItem } from "packlist-components";

export default props => (
  <AddPackingItem
    addItem={props.addItem}
    clear={props.clearItems}
    setNewItemText={event => props.setNewItemText(event.target.value)}
    value={props.newItem}
  />
);
