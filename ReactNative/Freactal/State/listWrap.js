import { provideState, update } from 'freactal'
export const withState = provideState({
  initialState: () => ({
    allItems: ['nacho', 'burrito', 'hotdog'],
    newItemName: ''
  }),
  effects: {
    addItem: update(state => ({
      allItems: [...state.allItems, state.newItemName],
      newItemName: ''
    })),
    setNewItemName: update((state, value) => ({ newItemName: value })),
    clear: update({allItems: []})
  }
})
