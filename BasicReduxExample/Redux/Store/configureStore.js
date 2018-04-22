import { createStore, applyMiddleware } from 'redux'
import RootReducer from '../Reducers/'

let middleware = []

const baseStore = createStore(RootReducer, applyMiddleware(...middleware))
export default initialState => {
  return baseStore
}
