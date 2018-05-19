import { AddPackingItem } from "packlist-components";
import { connect } from "react-redux";

const mapState = models => ({
  value: models.items.newItem
})

const mapDispatch = models => ({
  addItem: models.items.addItem,
  setNewItemText: (event) => models.items.setNewItemText(event.target.value),
  clear: models.items.clearItems
})

export default connect(mapState, mapDispatch)(AddPackingItem)
