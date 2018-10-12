import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import produce from 'immer';
import ListItems from './Components/listItems';
import AddItems from './Components/addItems';

export default class App extends React.Component {
  state = {
    allItems: ['nachos', 'burritos', 'hot dog'],
    newItemName: ''
  };

  addItem = () => {
    this.setState(
      produce(state => {
        state.allItems.push(state.newItemName);
        state.newItemName = '';
      })
    );
  };

  setNewItemName = value => {
    this.setState(
      produce(state => {
        state.newItemName = value;
      })
    );
  };

  clear = () => {
    this.setState(
      produce(state => {
        state.allItems = [];
      })
    );
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="always">
        <Text style={styles.welcome}>Welcome to immer</Text>
        <AddItems
          addItem={this.addItem}
          setNewItemName={this.setNewItemName}
          newItemName={this.state.newItemName}
          clear={this.clear}
        />
        <ListItems allItems={this.state.allItems} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
