import React from "react";
import { useRecoilState } from "recoil";
import { userInput, items, useResetItem } from "../atoms";

import { AddPackingItem } from "packlist-components";

const AddItems = () => {
  const [input, setInput] = useRecoilState(userInput);
  const [allItems, setItem] = useRecoilState(items);
  const resetItem = useResetItem();

  const addItem = () => {
    setItem([...allItems, input]);
    resetInput();
  };
  const resetInput = () => {
    setInput("");
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
