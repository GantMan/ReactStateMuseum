import React from "react";
import { useUserInputStore, useItemsStore } from "../store";

import { AddPackingItem } from "packlist-components";

const AddItems = () => {
  const { input, setInput, resetInput } = useUserInputStore();
  const addListItem = useItemsStore((state) => state.addItem);
  const resetItem = useItemsStore((state) => state.resetItems);

  const addItem = () => {
    addListItem(input);
    resetInput();
  };

  return (
    <AddPackingItem
      value={input}
      setNewItemText={e => setInput(e.target.value)}
      addItem={addItem}
      clear={resetItem}
    />
  );
};

export default AddItems;
