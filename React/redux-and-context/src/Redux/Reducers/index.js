import { combineReducers } from "redux";
import ItemReducers from "./items";

// glue all the reducers together
export default combineReducers({
  ...ItemReducers
});
