import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import createStore from "pure-store"
import AddItem from "./Components/AddItem";
import ListItems from "./Components/ListItems";

export const store = createStore({
  allItems: ["nachos", "burritos", "hot dog"],
  newItemName: ""
})

export default class App extends Component {
  constructor () {
    super()
    store.subscribe(()=> this.forceUpdate())
  }

  render = ()=> (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='always'
    >
      <Text style={styles.welcome}>
        Welcome to pure-store
      </Text>
      <AddItem />
      <ListItems />
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
