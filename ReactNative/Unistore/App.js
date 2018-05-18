import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { Provider } from "unistore/react"
import ListItems from "./Components/listItems"
import AddItems from "./Components/addItem"
import { store } from "./store"


export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps='always'
        >
          <Text style={styles.welcome}>
            Welcome to Unistore
          </Text>
          <AddItems />
          <ListItems />
        </ScrollView>
      </Provider>
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
