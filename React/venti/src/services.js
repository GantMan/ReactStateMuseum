import { state } from 'venti'

state.set({
  items: ['nacho', 'burrito', 'hotdog'],
  newItemText: ''
})

export function addItem() {
  const items = state.get('items', [])
  const newItemText = state.get('newItemText')
  state.set('items', [...items, newItemText])
}

export function setNewItemText(name) {
  state.set('newItemText', name)
}

export function clear() {
  state.set('items', [])
}