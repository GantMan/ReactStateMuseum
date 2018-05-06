import React, { Component } from "react";
import { AddPackingItem } from "packlist-components";
import { injectState } from "freactal";

export const AddItems = ({ state, effects }) => (
  <AddPackingItem
    addItem={effects.addItem}
    setNewItemText={e => effects.setNewItemName(e.target.value)}
    value={state.newItemName}
    clear={effects.clear}
  />
);

export default injectState(AddItems);
