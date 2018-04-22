import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import ListStore from '../Mobx/listStore'
import {observer} from 'mobx-react/native'

@observer
export default class AddItems extends Component {

  render() {
    return (
      <View>
        <TextInput placeholder='Packing Item'
          autoFocus
          blurOnSubmit
          clearTextOnFocus
          onSubmitEditing={ListStore.addItem}
          onChangeText={ListStore.setNewItemName}
          value={ListStore.newItemName}
          returnKeyLabel='Add Item'
          returnKeyType='done'
        />
        <TouchableOpacity
          style={[{backgroundColor: 'green'}, styles.button]}
          onPress={ListStore.addItem}>
          <Text>ADD ITEM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{backgroundColor: 'red'}, styles.button]}
          onPress={ListStore.clear}>
          <Text>CLEAR ITEMS</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 4,
    margin: 5,
    padding: 10
  }
})

