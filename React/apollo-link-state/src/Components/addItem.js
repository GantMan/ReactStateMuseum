import React, { Component } from "react";
import { AddPackingItem } from "packlist-components";
import { graphql } from "react-apollo"
import { addItem, clearItems, updateNewItem } from "../Mutations";
import { newItem } from "../Queries"

@graphql(addItem, { name: "addItem" })
@graphql(clearItems, { name: "clearItems" })
@graphql(updateNewItem, { name: "updateNewItem" })
@graphql(newItem)
export default class AddItems extends Component {
  render() {
    const {
      addItem,
      clearItems,
      updateNewItem,
      data: { newItem }
    } = this.props

    return (
      <AddPackingItem
        addItem={addItem}
        setNewItemText={e => updateNewItem({ variables: { text: e.target.value } }) }
        value={newItem}
        clear={clearItems}
      />
    );
  }
}
