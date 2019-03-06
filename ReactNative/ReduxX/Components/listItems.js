import React, { Component } from 'react'
import { SimpleList } from 'packlist-components/native'

export default class ListItems extends Component {
  render = () => {
    return <SimpleList value={this.props.allItems} />
  }
}
