import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

import AddItem from './Components/addItem';
import ListItems from './Components/listItems';
import { PackingProvider } from './Constate/packingContext';

const App = () => {
  return (
    <PackingProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          style={styles.scrollView}
        >
          <Text style={styles.welcome}>Welcome to Constate!</Text>
          <AddItem />
          <ListItems />
        </ScrollView>
      </SafeAreaView>
    </PackingProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default App;
