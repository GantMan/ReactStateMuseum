export default class List {
  allItems = [String];
  newItemText = String;

  addItem() {
    return this.allItems.push(this.state.newItemText).newItemText.set("");
  }

  setNewItemText(text) {
    return this.newItemText.set(text);
  }

  clear() {
    return this.allItems.set([]);
  }
}
