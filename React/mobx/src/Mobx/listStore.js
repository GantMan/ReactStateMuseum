import { observable } from "mobx";

class ObservableListStore {
  @observable allItems = ["nacho", "burrito", "hotdog"];
  @observable newItemName = "";

  addItem = () => {
    this.allItems.push(this.newItemName);
    this.newItemName = "";
  };

  clear = () => {
    this.allItems = [];
  };

  setNewItemName = e => {
    this.newItemName = e.target.value;
  };
}

const observableListStore = new ObservableListStore();
export default observableListStore;
