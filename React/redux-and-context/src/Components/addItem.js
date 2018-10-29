import { AddPackingItem } from "packlist-components";
import { ItemActionCreators } from "../Redux/Actions/items";
import { connect } from "react-redux";

const mapStateToProps = state => ({ value: state.items.newItemName });

const { setNewItemName, addItem, clear } = ItemActionCreators;

const mapDispatchToProps = {
  setNewItemText: e => setNewItemName(e.target.value),
  addItem,
  clear
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPackingItem);
