import React from "react";
import { Component } from "react-simplified";
import { StyleSheet, Text, ScrollView } from "react-native";

import ListItems from "./Components/listItems";
import AddItems from "./Components/addItems";

export default class App extends Component {
  allItems = ["nachos", "burritos", "hot dog"];
  newItemName = "";

  addItem() {
    this.allItems.push(this.newItemName);
    this.newItemName = "";
  }

  setNewItemName(value) {
    this.newItemName = value;
  }

  clear() {
    this.allItems = [];
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="always">
        <Text style={styles.welcome}>Welcome to setState</Text>
        <AddItems
          addItem={this.addItem}
          setNewItemName={this.setNewItemName}
          newItemName={this.newItemName}
          clear={this.clear}
        />
        <ListItems allItems={this.allItems} />
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
