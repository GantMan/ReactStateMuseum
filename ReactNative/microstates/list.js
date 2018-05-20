class List {
  allItems = [String];
  newItemText = String;

  addItem() {
    return this.allItems.push(this.state.newItemText).newItemText.set("");
  }
}

export default List;
