import { createOvermind } from "overmind";
import { createHook } from "overmind-react";

export const useApp = createHook();

export const overmind = createOvermind(
  {
    state: {
      newItemName: "",
      items: ["nacho", "burrito", "hotdog"]
    },
    actions: {
      setNewItemName({ state }, itemName) {
        state.newItemName = itemName;
      },
      addItem({ state }) {
        state.items = [...state.items, state.newItemName];

        state.newItemName = "";
      },
      clear({ state }) {
        state.items = [];
      }
    }
  },
  {
    devtools: false
  }
);
