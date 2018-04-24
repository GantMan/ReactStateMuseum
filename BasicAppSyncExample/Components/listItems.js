import React, { Component } from 'react'
import { SimpleList } from 'packlist-components'
import { graphql } from 'react-apollo'
import ListAllItemsQuery from '../Queries/ListAllItemsQuery'

class ListItems extends Component {
  render () {
    return (
      <SimpleList
        value={this.props.allItems && this.props.allItems.map(item => item.name) || []}
      />
    )
  }
}

// HOC lane
export default graphql(ListAllItemsQuery, {
  options: {
    fetchPolicy: 'cache-and-network'
  },
  props: (props) => ({
    // fits structure identified in query and stores in allItems
    // stores as prop.allItems
    allItems: props.data.listListItems && props.data.listListItems.items
  })
})(ListItems)
