import createStore from "unistore";

export const store = createStore({
  newItemValue: "",
  allItems: ["Hot Dog", "Pizza", "Donuts"]
});

export const actions = store => ({
  setNewItemText: (_, newValue) => ({ newItemValue: newValue }),
  addItem: ({ newItemValue, allItems }) => ({
    allItems: allItems.concat([newItemValue]),
    newItemValue: ""
  }),
  clearItems: () => ({ allItems: [] })
});
