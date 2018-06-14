import React from "react";
import { Container } from "constate";

export const ItemsContainer = props => (
  <Container initialState={initialState} actions={actions} {...props} />
);

const initialState = {
  allItems: ["Donuts", "Hamburguer", "Pizza"],
  newItem: ""
};

const actions = {
  setNewItemText: newItem => state => ({ newItem }),
  addItem: () => ({ allItems, newItem }) => ({
    allItems: [...allItems, newItem],
    newItem: ""
  }),
  clearItems: () => state => ({ allItems: [] })
};
