import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

// import State from '@microstates/react';
import ListItems from './Components/listItems'
import AddItems from './Components/addItems'
import assignSymbols from 'assign-symbols';
import ListModel from "./list";
import { create } from 'microstates';

let List = create(ListModel, {
  allItems: ["nachos", "burritos", "hot dog"],
  newItemText: ''
});

export default class App extends Component {
  render() {
    console.log(List);
    console.log('symbol', Object.assign({}, { [Symbol()]: true }));
    console.log('symbol', assignSymbols({key: 'value' }, { [Symbol()]: true }));
    debugger;
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <Text style={styles.welcome}>
          Welcome to microstates
        </Text>
        <AddItems
          addItem={() => List.addItem()}
          setNewItemName={value => {
            List.setNewItemText(value)
          }}
          newItemName={List.state.newItemText}
          clear={() => List.clear()}
        />
        <ListItems
          allItems={List.state.allItems}
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
