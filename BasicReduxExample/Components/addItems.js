import React, { Component } from 'react'
import { AddPackingItem } from 'packlist-components'
import { ItemActionCreators } from '../Redux/Actions/items'
import {connect} from 'react-redux'

class AddItems extends Component {
  render () {
    return (
      <AddPackingItem
        addItem={() => this.props.dispatch(ItemActionCreators.addItem())}
        setNewItemText={(t) => this.props.dispatch(ItemActionCreators.setNewItemName(t))}
        value={this.props.newItemName}
        clear={() => this.props.dispatch(ItemActionCreators.clear())}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newItemName: state.items.newItemName
  }
}

export default connect(mapStateToProps)(AddItems)
