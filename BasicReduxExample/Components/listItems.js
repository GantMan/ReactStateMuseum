import React, { Component } from 'react'
import { SimpleList } from 'packlist-components'
import {connect} from 'react-redux'

class ListItems extends Component {
  render () {
    return (
      <SimpleList
        value={this.props.allItems}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allItems: state.items.myItems
  }
}

export default connect(mapStateToProps)(ListItems)
