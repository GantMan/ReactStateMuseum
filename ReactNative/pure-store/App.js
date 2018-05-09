import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { SimpleList, AddPackingItem } from 'packlist-components/native'
import createStore from "pure-store"


const store = createStore({
  allItems: ["nachos", "burritos", "hot dog"],
  newItemName: ""
})

export default class App extends Component {
  constructor () {
    super()
    store.subscribe(()=> this.forceUpdate())
  }

  addItem = ()=> {
    store.update(state=> {
      state.allItems.push(state.newItemName)
      state.newItemName = ""
    })
  }

  setName = n => store.update({ newItemName: n })
  clear   = ()=> store.update({ allItems: [] })

  render = ()=> (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='always'
    >
      <Text style={styles.welcome}>
        Welcome to pure-store
      </Text>
      <AddPackingItem
        value={store.state.newItemName}
        addItem={this.addItem}
        setNewItemText={this.setName}
        clear={this.clear}
      />
      <SimpleList
        value={store.state.allItems}
      />
    </ScrollView>
  )
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
