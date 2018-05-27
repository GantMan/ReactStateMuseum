import React, { Component } from "react";
import { AddPackingItem } from "packlist-components";
import { observer } from "controllerim";
import { ItemsController } from "../controllers";

class AddItem extends Component {
  componentWillMount() {
    this.controller = new ItemsController(this);
  }

  render() {
    const {
      getNewItemText: newItem,
      setNewItemText,
      setAddItem: addItem,
      setClearItems: clearItems
    } = this.controller;

    return (
      <AddPackingItem
        addItem={() => addItem()}
        setNewItemText={event => setNewItemText(event.target.value)}
        value={newItem()}
        clear={() => clearItems()}
      />
    );
  }
}

export default observer(AddItem);
