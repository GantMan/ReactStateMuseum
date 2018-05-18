import { AddPackingItem } from "packlist-components/native";
import { connect } from "react-redux";

const mapState = models => ({
  value: models.items.newItem
})

const mapDispatch = models => ({
  addItem: models.items.addItem,
  setNewItemText: models.items.setNewItemText,
  clear: models.items.clearItems
})

export default connect(mapState, mapDispatch)(AddPackingItem)
