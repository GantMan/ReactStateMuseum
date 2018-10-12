import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

import ListItems from './Components/listItems'
import AddItems from './Components/addItems'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      allItems: ['nachos', 'burritos', 'hot dog'],
      newItemName: ''
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
          Welcome to setState
        </Text>
        <AddItems
          addItem={this.addItem}
          setNewItemName={this.setNewItemName}
          newItemName={this.state.newItemName}
          clear={this.clear}
        />
        <ListItems
          allItems={this.state.allItems}
        />
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
