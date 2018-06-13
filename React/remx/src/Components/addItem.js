import { AddPackingItem } from "packlist-components";
import { connect } from "remx";

function mapStateToProps(ownProps) {
  return {
    value: ownProps.store.getNewItemText(),
    
    setNewItemText: (e) => ownProps.store.setNewItemText(e.target.value),
    addItem: ownProps.store.addItem,
    clear: ownProps.store.clear
  };
}

export default connect(mapStateToProps)(AddPackingItem);
