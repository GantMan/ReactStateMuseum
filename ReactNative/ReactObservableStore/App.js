import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { SimpleList, AddPackingItem } from 'packlist-components/native'
import withStore, { addItem, updateInput, clearAll } from './store'

export class App extends Component {
  render () {
    const { allItems, newItemName } = this.props
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <Text style={styles.welcome}>
          Welcome to React Observable Store
        </Text>
        <AddPackingItem
          addItem={addItem}
          setNewItemText={updateInput}
          value={newItemName}
          clear={clearAll}
        />

        <SimpleList value={allItems} />
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

export default withStore('museum', App)
