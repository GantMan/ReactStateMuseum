class List {
  allItems = [String];
  newItemText = String;

  addItem() {
    debugger;
    return this.allItems.push(this.state.newItemText).newItemText.set("");
  }

  setNewItemText(text) {
    console.log("text = ", text);

    return this.newItemText.set(text);
  }

  clear() {
    return this.allItems.set([]);
  }
}

export default List;
