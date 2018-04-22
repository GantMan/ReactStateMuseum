import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  LayoutAnimation
} from 'react-native'
import {observer, inject} from 'mobx-react/native'

@inject("listStore")
@observer
export default class ListItems extends Component {

  listItems = () => {
    // window.alert(this.props.allItems)
    LayoutAnimation.spring()
    return this.props.listStore.allItems.map(item => <Text key={item}>{item}</Text>)
  }

  render() {
    return (
        <View>
          { this.listItems() }
        </View>
    )
  }
}
