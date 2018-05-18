import React from "react";
import { AddPackingItem } from "packlist-components/native";
import { connect } from "unistore/react";
import { actions } from "../store";

export default connect(["newItemValue"], actions)(
  ({ addItem, clearItems, newItemValue, setNewItemText }) => (
      <AddPackingItem
        addItem={addItem}
        setNewItemText={setNewItemText}
        value={newItemValue}
        clear={clearItems}
      />
  )
);
