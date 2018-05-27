import model from "parket";

const ItemsModel = model("ItemsModel", {
  initial: () => ({
    newItem: "",
    allItems: []
  }),
  actions: state => ({
    setNewItemText(newValue) {
      state.newItem = newValue; // reaaaaaaactive!
    },
    addItem() {
      state.allItems = state.allItems.concat([state.newItem]);
      state.newItem = "";
    },
    clearItems() {
      state.allItems = [];
    }
  })
  // computed properties
  // views: state => ({})
});

export const store = ItemsModel({
  allItems: ["Pizza", "Donuts", "Hot Dog"]
});
