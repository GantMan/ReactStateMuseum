import { createUpdater } from 'redux-lightweight';

export class Items {
  state = {
    myItems: ["nacho", "burrito", "hotdog"],
    newItemName: ""
  };

  addItem() {
    return {
      ...this.state,
      myItems: [
        ...this.state.myItems,
        this.state.newItemName
      ],
      newItemName: ""
    };
  }

  clear() {
    return {
      ...this.state,
      myItems: []
    };
  }

  setNewItemName(newItemName) {
    return {
      ...this.state,
      newItemName,
    };
  }
}

export const [itemsReducer, ItemActionCreators] = createUpdater(Items);
