import Store from 'react-observable-store'

const STORE_DEBUG = true

const storeDefaults = {
  museum: {
    allItems: ['nachos', 'burritos', 'hot dog'],
    newItemName: ''
  }
}

Store.init(storeDefaults, STORE_DEBUG)

export const addItem = () => {
  const { allItems, newItemName } = Store.get('museum') // Read anywhere
  allItems.push(newItemName)

  // Update state
  Store.update('museum', {
    allItems: allItems,
    newItemName: ''
  })
}

export const updateInput = value => {
  Store.set('museum.newItemName', value)
}

export const clearAll = () => {
  Store.set('museum.allItems', [])
}

export default Store.withStore
