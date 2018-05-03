import React, { Component } from 'react'
import { AddPackingItem } from 'packlist-components/native'
import {observer, inject} from 'mobx-react/native'

@inject('listStore')
@observer
export default class AddItems extends Component {
  render () {
    return (
      <AddPackingItem
        addItem={this.props.listStore.addItem}
        setNewItemText={this.props.listStore.setNewItemName}
        value={this.props.listStore.newItemName}
        clear={this.props.listStore.clear}
      />
    )
  }
}
