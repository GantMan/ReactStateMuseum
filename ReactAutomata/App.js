import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'
import { withStatechart } from 'react-automata'
import statechart from './Statecharts/index'

import ListItems from './Components/listItems'
import AddItems from './Components/addItems'

class App extends Component {
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
    this.setState({newItemName: this.props.value})
  }

  clear = () => {
    this.setState({allItems: []})
  }

  handAddItem = () => this.props.transition('ADD_ITEM')
  handleSetNewItemName = value => this.props.transition('SET_NEW_ITEM_NAME', {value})
  handleClear = () => this.props.transition('CLEAR')

  render () {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <Text style={styles.welcome}>
          Welcome to setState + react-automata
        </Text>
        <AddItems
          addItem={this.handAddItem}
          setNewItemName={this.handleSetNewItemName}
          newItemName={this.state.newItemName}
          clear={this.handleClear}
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

export default withStatechart(statechart)(App)
