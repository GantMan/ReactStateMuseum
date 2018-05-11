import { store } from "react-easy-state";

export const items = store({
  newItem: "",
  allItems: ["Pizza!", "Hot dogs", "Donuts"],
  updateNewItemValue(newItem = "") {
    items.newItem = newItem;
  },
  addItem() {
    items.allItems = items.allItems.concat([items.newItem]);
    items.updateNewItemValue();
  },
  clearItems() {
    items.allItems = [];
  }
});
