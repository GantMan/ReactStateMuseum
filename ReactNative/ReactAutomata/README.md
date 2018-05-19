To run, simply
`yarn` or `npm i`
and then run with `react-native run-ios`


### State Render
[XState chart](https://musing-rosalind-2ce8e7.netlify.com/?machine=%7B%22initial%22%3A%22idle%22%2C%22states%22%3A%7B%22idle%22%3A%7B%22on%22%3A%7B%22CLEAR%22%3A%7B%22idle%22%3A%7B%22actions%22%3A%5B%22clear%22%5D%7D%7D%2C%22SET_NEW_ITEM_NAME%22%3A%7B%22loaded%22%3A%7B%22actions%22%3A%5B%22setNewItemName%22%5D%7D%7D%7D%7D%2C%22loaded%22%3A%7B%22on%22%3A%7B%22ADD_ITEM%22%3A%7B%22idle%22%3A%7B%22actions%22%3A%5B%22addItem%22%5D%7D%7D%2C%22CLEAR%22%3A%7B%22loaded%22%3A%7B%22actions%22%3A%5B%22clear%22%5D%7D%7D%2C%22SET_NEW_ITEM_NAME%22%3A%7B%22loaded%22%3A%7B%22actions%22%3A%5B%22setNewItemName%22%5D%7D%2C%22idle%22%3A%7B%22actions%22%3A%5B%22setNewItemName%22%5D%7D%7D%7D%7D%7D%7D)

![The state chart for this finite state machine](./state-chart.png)

### Tests:
Also, in this example are automatic snapshot tests per state (feature of react-automata).  That's why I added the <State> component to this UI.  This causes a render differentiation for state to show up in snapshots.
  
### More

[Helpful Video](https://www.youtube.com/watch?v=sZg3DoTfHLQ&mc_cid=e9c5a0712e&mc_eid=d08e406cf6)
