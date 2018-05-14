import React, { Component } from 'react'
import { AddPackingItem } from 'packlist-components/native'

export default class AddItems extends Component {
  render () {
    return (
      <AddPackingItem
        addItem={this.props.addItem}
        setNewItemText={this.props.setNewItemName}
        value={this.props.newItemName}
        clear={this.props.clear}
      />
    )
  }
}
