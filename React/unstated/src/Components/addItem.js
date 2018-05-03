import React, { Component } from "react";
import { AddPackingItem } from "packlist-components";
import ListContainer from "../Unstated/listContainer";
import { Subscribe } from "unstated";

export default class AddItems extends Component {
  render() {
    return (
      <Subscribe to={[ListContainer]}>
        {list => (
          <AddPackingItem
            addItem={list.addItem}
            setNewItemText={list.setNewItemName}
            value={list.state.newItemName}
            clear={list.clear}
          />
        )}
      </Subscribe>
    );
  }
}
