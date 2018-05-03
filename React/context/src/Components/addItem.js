import React, { Component } from "react";
import { AddPackingItem } from "packlist-components";
import { PackingContext } from "../Context/packingContext";

export default class AddItems extends Component {
  render() {
    return (
      <PackingContext.Consumer>
        {({ newItemName, addItem, setNewItemName, clear }) => (
          <AddPackingItem
            addItem={addItem}
            setNewItemText={setNewItemName}
            value={newItemName}
            clear={clear}
          />
        )}
      </PackingContext.Consumer>
    );
  }
}
