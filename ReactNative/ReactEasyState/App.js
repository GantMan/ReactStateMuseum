import React from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'
import { view } from 'react-easy-state'
import { items } from './store'
import ListItems from './Components/listItems'
import AddItems from './Components/addItems'

const App = view(() => {
  const { newItem, allItems, setNewItemValue, addItem, clearItems } = items

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='always'
    >
      <Text style={styles.welcome}>
        Welcome to React Easy State
      </Text>
      <AddItems
        addItem={addItem}
        setNewItemText={setNewItemValue}
        value={newItem}
        clear={clearItems}
      />
      <ListItems allItems={allItems} />
    </ScrollView>
  )
})

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

export default App
