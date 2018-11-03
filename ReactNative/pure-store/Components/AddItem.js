import React, { Component } from 'react';
import { AddPackingItem } from 'packlist-components/native'
import { store } from "../App";

class AddItem extends Component {
  addItem = () => {
    store.update(state => {
      state.allItems.push(state.newItemName)
      state.newItemName = ""
    });
  };

  setName = n => store.update({ newItemName: n })
  clear   = ()=> store.update({ allItems: [] });
  
  render() {
    return (
      <AddPackingItem
        addItem={this.addItem}
        setNewItemText={this.setName}
        value={store.state.newItemName}
        clear={this.clear}
      />
    );
  }
}

export default AddItem;
