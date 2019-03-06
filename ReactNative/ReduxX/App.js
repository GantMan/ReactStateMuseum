import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

import ListItems from './Components/listItems'
import AddItems from './Components/addItems'

const reduxX = require('./reduxx.js')

const { setupReduxX, getState, setState } = reduxX

export default class App extends Component {
  constructor (props) {
    super(props)
    setupReduxX(this)
  }

  addItem = () => {
    /*
        ReduxX "store" works like a regular
        React component and its state,
        except you can access it in any file
        to access the global state! #swaggy
    */
    reduxX.store.setState(state => ({
      allItems: [...state.allItems, state.newItemName],
      newItemName: ''
    }))
  }

  setNewItemName = value => {
    setState('newItemName', value)
  }

  clear = () => {
    setState('allItems', [])
  }

  render = () => {
    const value = getState('newItemName')
    const allItems = getState('allItems')
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <Text style={styles.welcome}>
          Welcome to ReduxX
        </Text>
        <AddItems
          addItem={this.addItem}
          setNewItemText={this.setNewItemName}
          value={value}
          clear={this.clear}
        />
        <ListItems allItems={allItems} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
