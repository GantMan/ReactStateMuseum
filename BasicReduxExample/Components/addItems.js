import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import { ItemActionCreators } from '../Redux/Actions/items'
import {connect} from 'react-redux'

class AddItems extends Component {
  render() {
    return (
        <View>
          <TextInput placeholder='Packing Item'
            autoFocus
            blurOnSubmit
            clearTextOnFocus
            onSubmitEditing={() => this.props.dispatch(ItemActionCreators.addItem())}
            onChangeText={(t) => this.props.dispatch(ItemActionCreators.setNewItemName(t))}
            value={this.props.newItemName}
            returnKeyLabel='Add Item'
            returnKeyType='done'
          />
          <TouchableOpacity
            style={[{backgroundColor: 'green'}, styles.button]}
            onPress={() => this.props.dispatch(ItemActionCreators.addItem())}>
            <Text>ADD ITEM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{backgroundColor: 'red'}, styles.button]}
            onPress={() => this.props.dispatch(ItemActionCreators.clear())}>
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

const mapStateToProps = (state) => {
  return {
    newItemName: state.items.newItemName
  }
}

export default connect(mapStateToProps)(AddItems)
