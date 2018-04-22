import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  LayoutAnimation
} from 'react-native'

import {connect} from 'react-redux'

class ListItems extends Component {

  listItems = () => {
    // window.alert(this.props.allItems)
    LayoutAnimation.spring()
    return this.props.allItems.map(item => <Text key={item}>{item}</Text>)
  }

  render() {
    return (
        <View>
          { this.listItems() }
        </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allItems: state.items.myItems
  }
}

export default connect(mapStateToProps)(ListItems)
