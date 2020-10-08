import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import AddItems from './Components/addItems';
import ListItems from './Components/listItems';

export default function App() {
  const [allItems, setItems] = useState(['nachos', 'burritos', 'hot dog']);
  const clear = () => setItems([]);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">
        <Text style={styles.welcome}>Welcome to useState</Text>
        <AddItems
          addItem={(item) => setItems([item, ...allItems])}
          clear={clear}
        />
        <ListItems allItems={allItems} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
