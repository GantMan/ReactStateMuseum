import { Controller } from "controllerim";

export class ItemsController extends Controller {
  // Initial State
  state = {
    newItem: "",
    allItems: ["Hot Dog"]
  };

  // Accesible state
  getNewItemText = () => this.state.newItem;
  getAllItems = () => this.state.allItems;

  // Actions
  setNewItemText = newVal => {
    this.state.newItem = newVal;
  };
  setAddItem = () => {
    const { newItem, allItems } = this.state;
    this.state.allItems = allItems.concat([newItem]);
    this.state.newItem = "";
  };
  setClearItems = () => {
    this.state.allItems = [];
  };
}
