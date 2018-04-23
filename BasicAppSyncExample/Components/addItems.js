import React, { Component } from 'react'
import { AddPackingItem } from 'packlist-components'
const defaultState = { text: '' }

export default class AddItems extends Component {
  constructor (props) {
    super(props)
    this.state = defaultState
  }

  handleAdd = () => {
    const { text } = this.state
    this.setState(defaultState, () => {
      this.props.onAdd({
        id: (new Date).getTime().toString(),
        itemName: text
      })
    })
  }

  deleteAll = () => {
    const { allItems } = this.props
    // Delete em all
    if (allItems) {
      allItems.map(item => this.props.onDelete({id: item.id}))
    }
  }

  render () {
    return (
      <AddPackingItem
        addItem={this.handleAdd}
        setNewItemText={(text) => this.setState({text})}
        value={this.state.text}
        clear={this.deleteAll}
      />
    )
  }
}

