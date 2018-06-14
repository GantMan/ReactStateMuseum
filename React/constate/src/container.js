import React from "react";

export const ItemsContainer = props => (
  <Container {...props} initialState={initialState} actions={actions} />
);

const initialState = {
  allItems: ["Donuts", "Hamburguer", "Pizza"],
  newItem: ""
};

const actions = {
  setNewItemText: newItem => state => ({ newItem }),
  addItem: () => ({ allItems, newItem }) => ({
    allItems: allItems.concat(newItem),
    newItem: ""
  }),
  clearItems: () => state => ({ allItems: [] })
};
