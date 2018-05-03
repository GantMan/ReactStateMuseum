import React, { Component } from 'react'
import { AddPackingItem } from 'packlist-components/native'
import ListStore from '../Mobx/listStore'
import {observer} from 'mobx-react/native'

@observer
export default class AddItems extends Component {
  render () {
    return (
      <AddPackingItem
        addItem={ListStore.addItem}
        setNewItemText={ListStore.setNewItemName}
        value={ListStore.newItemName}
        clear={ListStore.clear}
      />
    )
  }
}
