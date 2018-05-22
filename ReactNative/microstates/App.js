import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

import ListItems from './Components/listItems'
import AddItems from './Components/addItems'
import State from '@microstates/react';

// Define your state model
class ListModel {
  allItems = [String];
  newItemText = String;
}

export default class App extends Component {
  render() {
    return (
      <State
        type={ListModel}
        value={{ allItems: ["nachos", "burritos", "hot dog"] }}
      >
        {list => (
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="always"
          >
            <Text style={styles.welcome}>Welcome to microstates</Text>
            <AddItems
              addItem={() =>
                list.allItems.push(list.state.newItemText).newItemText.set('')
              }
              setNewItemName={(value) => list.newItemText.set(value)}
              newItemName={list.state.newItemText}
              clear={() => list.allItems.set([])}
            />
            <ListItems allItems={list.state.allItems} />
          </ScrollView>
        )}
      </State>
    );
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
