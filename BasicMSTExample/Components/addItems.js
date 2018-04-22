import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import {observer, inject} from 'mobx-react/native'

@inject("listStore")
@observer
export default class AddItems extends Component {

  render() {
    return (
        <View>
          <TextInput placeholder='Packing Item'
            autoFocus
            blurOnSubmit
            clearTextOnFocus
            onSubmitEditing={this.props.listStore.addItem}
            onChangeText={this.props.listStore.setNewItemName}
            value={this.props.listStore.newItemName}
            returnKeyLabel='Add Item'
            returnKeyType='done'
          />
          <TouchableOpacity
            style={[{backgroundColor: 'green'}, styles.button]}
            onPress={this.props.listStore.addItem}>
            <Text>ADD ITEM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{backgroundColor: 'red'}, styles.button]}
            onPress={this.props.listStore.clear}>
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

