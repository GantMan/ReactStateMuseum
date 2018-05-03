import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import ListItems from './Components/listItems'
import { Provider } from "unstated"
import AddItems from './Components/addItem'

export default class App extends Component {
  render () {
    return (
      <Provider>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps='always'
        >
          <Text style={styles.welcome}>
            Welcome to unstated
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
