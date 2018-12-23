import { AddPackingItem } from "packlist-components";
import { connect } from "react-redux";

import { ItemActionCreators } from "../Redux/Items";

const mapStateToProps = state => ({ value: state.newItemName });

const { setNewItemName, addItem, clear } = ItemActionCreators;

const mapDispatchToProps = {
  setNewItemText: e => setNewItemName(e.target.value),
  addItem,
  clear
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPackingItem);
