import React from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

import ListItems from './Components/listItems'
import AddItems from './Components/addItems'
import { withState } from './State/listWrap'

export const App = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='always'
    >
      <Text style={styles.welcome}>
        Welcome to Freactal
      </Text>
      <AddItems />
      <ListItems />
    </ScrollView>
  )
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

export default withState(App)
