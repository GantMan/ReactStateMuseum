import { createStore, applyMiddleware } from "redux";

import { itemsReducer } from "../Items";

let middleware = [];

const baseStore = createStore(itemsReducer, applyMiddleware(...middleware));
export default initialState => {
  return baseStore;
};
