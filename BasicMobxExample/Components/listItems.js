import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  LayoutAnimation
} from 'react-native'

import ListStore from '../Mobx/listStore'
import {observer} from 'mobx-react/native'

@observer
export default class ListItems extends Component {

  listItems = () => {
    // window.alert(this.props.allItems)
    LayoutAnimation.spring()
    return ListStore.allItems.map(item => <Text key={item}>{item}</Text>)
  }

  render() {
    return (
        <View>
          { this.listItems() }
        </View>
    )
  }
}
