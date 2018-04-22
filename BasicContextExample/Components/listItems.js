import React, { Component } from 'react'
import { SimpleList } from 'packlist-components'
import { PackingContext } from '../Context/packingContext'

export default class AddItems extends Component {
  render () {
    return (
      <PackingContext.Consumer>
        {({allItems}) => (
          <SimpleList
            value={allItems}
          />
        )}
      </PackingContext.Consumer>
    )
  }
}
