import * as shades from 'shades';
import { ItemsActions } from "../Actions/items";

// shape is an empty array
const INITIAL_STATE = {
  myItems: ["nacho", "burrito", "hotdog"],
  newItemName: ""
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ItemsActions.ADD_ITEM:
      return shades.updateAll(
        shades.mod('myItems')(shades.push(state.newItemName)),
        shades.set('newItemName')('')
      )(state);
    case ItemsActions.CLEAR:
      return shades.set('myItems')([])(state);
    case ItemsActions.SET_NEW_ITEM_NAME:
      return shades.set('newItemName')(action.value)(state);
    default:
      return state;
  }
}

export default { items: reducer };
