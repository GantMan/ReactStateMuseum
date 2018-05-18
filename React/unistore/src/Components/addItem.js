import React from "react";
import { AddPackingItem } from "packlist-components";
import { connect } from "unistore/react";
import { actions } from "../store";

export default connect(["newItemValue"], actions)(
  ({ addItem, clearItems, newItemValue, setNewItemText }) => (
      <AddPackingItem
        addItem={addItem}
        setNewItemText={event => setNewItemText(event.target.value)}
        value={newItemValue}
        clear={clearItems}
      />
  )
);
