/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

import { Provider } from "mobx-react"
import ListItems from './Components/listItems'
import AddItems from './Components/addItems'

import { ListStoreModel } from './MST/listStore'

// first param of create is initial state (Optionals take care)
// second param is dependency injection(s)
const listStore = ListStoreModel.create()

export default class App extends Component {

  render() {
    // Provider means anything can grab via @inject()
    // Will possibly leave in future versions of MST due to context
    return (
      <Provider
        listStore={listStore}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps='always'
        >
          <Text style={styles.welcome}>
            Welcome to MobX-State-Tree
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
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
