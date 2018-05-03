import { Provider, Subscribe, Container } from "unstated";

export default class ListContainer extends Container {
  state = {
    allItems: ["nachos", "burritos", "hot dog"],
    newItemName: ""
  };

  addItem = () => {
    this.setState(state => ({
      allItems: [...state.allItems, state.newItemName],
      newItemName: ""
    }));
  };

  setNewItemName = event => {
    this.setState({ newItemName: event.target.value });
  };

  clear = () => {
    this.setState({ allItems: [] });
  };
}
