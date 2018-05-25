import { createStore } from "react-contextual";

export const store = createStore({
  newItem: "",
  allItems: ["Hot Dog", "Pizza", "Donuts"],
  setNewItemText: newItem => ({ newItem }),
  addItem: () => state => ({
    newItem: "",
    allItems: state.allItems.concat([state.newItem])
  }),
  clearItems: () => state => ({
    allItems: []
  })
});
