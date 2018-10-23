import { AddPackingItem } from 'packlist-components/native';
import { connect } from 'remx';

import { store } from '../remx/store';

function mapStateToProps(ownProps) {
  return {
    value: store.getNewItemText(),

    setNewItemText: (value) => store.setNewItemText(value),
    addItem: store.addItem,
    clear: store.clear
  };
}

export default connect(mapStateToProps)(AddPackingItem);
