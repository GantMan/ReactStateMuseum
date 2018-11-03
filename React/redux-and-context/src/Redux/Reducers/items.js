import { ItemsActions } from "../Actions/items";

// shape is an empty array
const INITIAL_STATE = {
  myItems: ["nacho", "burrito", "hotdog"],
  newItemName: ""
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ItemsActions.ADD_ITEM:
      return {
        ...state,
        myItems: [...state.myItems, state.newItemName],
        newItemName: ""
      };
    case ItemsActions.CLEAR:
      return {
        ...state,
        myItems: []
      };
    case ItemsActions.SET_NEW_ITEM_NAME:
      return {
        ...state,
        newItemName: action.value
      };
    default:
      return state;
  }
}

export default { items: reducer };
