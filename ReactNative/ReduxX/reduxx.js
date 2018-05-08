const ReduxX = require('reduxx')

module.exports = ReduxX({
  initialState: [
    {
      keys: 'allItems',
      value: ['nachos', 'burritos', 'hot dog']
    },
    {
      keys: 'newItemName',
      value: ''
    }
  ]
})
