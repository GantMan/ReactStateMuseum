import React, { Component } from 'react'
import { SimpleList } from 'packlist-components'

export default class AddItems extends Component {
  render () {
    return (
      <SimpleList
        value={this.props.allItems}
      />
    )
  }
}
