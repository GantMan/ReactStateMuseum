import { Controller } from "controllerim";

export class ItemsController extends Controller {
  // Initial State
  state = {
    newItem: "",
    allItems: ["Hot Dog", "Hamburguer", "Pizza"]
  };

  // Accesible state
  getNewItemText = () => this.state.newItem;
  getAllItems = () => this.state.allItems;

  // Actions
  setNewItemText = newVal => {
    this.state.newItem = newVal;
  };
  addItem = () => {
    const { newItem, allItems } = this.state;
    this.state.allItems = allItems.concat([newItem]);
    this.state.newItem = "";
  };
  clearItems = () => {
    this.state.allItems = [];
  };
}
