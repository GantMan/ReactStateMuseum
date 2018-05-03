import { types } from "mobx-state-tree"

const defaultItemList = ['nacho', 'burrito', 'hotdog']
const {model, optional, array, reference, string} = types

export const ListStoreModel = model({
  allItems: optional(array(string), defaultItemList),
  newItemName: ""
}).actions(self => ({
  addItem() {
    self.allItems.push(self.newItemName)
    self.newItemName = ""
  },
  setNewItemName(value) {
    self.newItemName = value
  },
  clear() {
    self.allItems = []
  }
}))
