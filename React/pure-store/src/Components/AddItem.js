import React, { Component } from 'react';
import { AddPackingItem } from "packlist-components";
import { store } from "../index";


class AddItem extends Component {
  addItem = () => {
    store.update(state => {
      state.allItems.push(state.newItemName)
      state.newItemName = ""
    });
  };

  setName = e => store.update({ newItemName: e.target.value });
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
