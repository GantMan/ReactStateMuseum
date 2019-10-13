import React from "react";
import { AddPackingItem } from "packlist-components";

import { useApp } from "../Overmind/store";

const AddItems = () => {
  const { actions, state } = useApp();

  return (
    <AddPackingItem
      addItem={actions.addItem}
      setNewItemText={event => actions.setNewItemName(event.target.value)}
      value={state.newItemName}
      clear={actions.clear}
    />
  );
};

export default AddItems;
