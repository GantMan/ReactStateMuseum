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
} from 'react-native';
import ListItems from './Components/listItems'
import AddItems from './Components/addItems'
import { Provider } from 'react-redux'
import configureStore from './Redux/Store/configureStore'
let store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps='always'
        >
          <Text style={styles.welcome}>
            Welcome to Redux
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
