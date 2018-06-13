import { AddPackingItem } from "packlist-components";
import { connect } from "remx";

import { store } from '../remx/store';

function mapStateToProps(ownProps) {
  return {
    value: store.getNewItemText(),
    
    setNewItemText: (e) => store.setNewItemText(e.target.value),
    addItem: store.addItem,
    clear: store.clear
  };
}

export default connect(mapStateToProps)(AddPackingItem);
