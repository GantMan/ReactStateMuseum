export const ItemsActions = {
  ADD_ITEM: "ADD_ITEM",
  CLEAR: "CLEAR",
  SET_NEW_ITEM_NAME: "SET_NEW_ITEM_NAME"
};

// Action creators store.dispatch actions
export const ItemActionCreators = {
  addItem: () => {
    return {
      type: ItemsActions.ADD_ITEM
    };
  },

  clear: () => {
    return {
      type: ItemsActions.CLEAR
    };
  },

  setNewItemName: value => {
    return {
      type: ItemsActions.SET_NEW_ITEM_NAME,
      value
    };
  }
};
