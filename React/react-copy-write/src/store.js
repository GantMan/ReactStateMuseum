import createState from "react-copy-write";

export const { Provider, Consumer, createMutator } = createState({
  newItem: "",
  allItems: ["Hot dog", "Hamburguer", "Pizza"]
});

export const setNewItemText = createMutator((draft, params) => {
  draft.newItem = params;
});

export const addItem = createMutator(draft => {
  draft.allItems = draft.allItems.concat([draft.newItem]);
  draft.newItem = "";
});

export const clearItems = createMutator(draft => {
  draft.allItems = [];
});
