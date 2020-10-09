import constate from "constate";
import { useState } from "react";

const initialState = {
  allItems: ["Donuts", "Hamburguer", "Pizza"],
  newItem: "",
};

function usePacking() {
  const [{ allItems, newItem }, setItems] = useState(initialState);

  const setNewItemText = (newItem) =>
    setItems((items) => ({ ...items, newItem }));

  const addItem = () =>
    setItems((items) => ({
      ...items,
      allItems: [...items.allItems, items.newItem],
      newItem: "",
    }));

  const clearItems = () => setItems((items) => ({ ...items, allItems: [] }));

  return { addItem, allItems, clearItems, newItem, setNewItemText };
}

export const [PackingProvider, usePackingContext] = constate(usePacking);
