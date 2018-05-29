import { Component } from "react";
import { observer } from "controllerim";
import { ItemsController } from "../controllers";

class ItemsProvider extends Component {
  componentWillMount() {
    this.controller = new ItemsController(this);
  }

  render() {
    const { controller } = this;

    return this.props.children({
      ...controller,
      newItem: controller.getNewItemText(),
      allItems: controller.getAllItems(),
      setNewItemText: newVal => controller.setNewItemText(newVal),
      addItem: () => controller.addItem(),
      clearItems: () => controller.clearItems()
    });
  }
}

export default observer(ItemsProvider);
