import createStore from "unistore";

export const store = createStore({
  newItemValue: "",
  allItems: ["Hot Dog", "Pizza", "Donuts"]
});

export const actions = store => ({
  setNewItemValue: (_, { value }) => ({ newItemValue: value }),
  addItem: ({ newItemValue, allItems }) => ({
    allItems: allItems.concat([newItemValue])
  }),
  clearItems: () => ({ allItems: [] })
});
