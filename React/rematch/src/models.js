export const items = {
  state: {
    newItem: "",
    allItems: ["Hot Dog", "Pizza", "Donuts"]
  },
  reducers: {
    setNewItemText: (state, payload) => ({
      ...state,
      newItem: payload
    }),
    addItem: state => ({
      ...state,
      allItems: state.allItems.concat([state.newItem]),
      newItem: ""
    }),
    clearItems: state => ({
      ...state,
      allItems: []
    })
  }
};
