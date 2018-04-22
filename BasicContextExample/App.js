import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

import ListItems from './Components/listItems'
import AddItems from './Components/addItems'

import { PackingContext, PackingDefaults } from './Context/packingContext'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...PackingDefaults,
      addItem: this.addItem,
      setNewItemName: this.setNewItemName,
      clear: this.clear
    }
  }

  addItem = () => {
    this.setState((state) => ({
      allItems: [...state.allItems, state.newItemName],
      newItemName: ''
    }))
  }

  setNewItemName = (value) => {
    this.setState({newItemName: value})
  }

  clear = () => {
    this.setState({allItems: []})
  }

  render () {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <Text style={styles.welcome}>
          Welcome to React 16 Context
        </Text>
        <PackingContext.Provider value={this.state}>
          <AddItems />
          <ListItems />
        </PackingContext.Provider>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
