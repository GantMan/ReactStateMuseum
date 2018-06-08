import React from "react";
import { AddPackingItem } from "packlist-components";
import { connect } from "parket/react";

export default connect(({ store }) => (
  <AddPackingItem
    addItem={store.addItem}
    clear={store.clearItems}
    setNewItemText={event => store.setNewItemText(event.target.value)}
    value={store.newItem}
  />
));
