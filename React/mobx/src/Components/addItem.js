import React, { Component } from "react";
import { AddPackingItem } from "packlist-components";
import ListStore from "../Mobx/listStore";
import { observer } from "mobx-react";

@observer
export default class AddItems extends Component {
  render() {
    return (
      <AddPackingItem
        addItem={ListStore.addItem}
        setNewItemText={ListStore.setNewItemName}
        value={ListStore.newItemName}
        clear={ListStore.clear}
      />
    );
  }
}
