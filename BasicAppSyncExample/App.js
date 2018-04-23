import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'
import ListItems from './Components/listItems'
import AddItems from './Components/addItems'
// The AppSync Import Bus
import AWSAppSyncClient from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link'
import { graphql, ApolloProvider, compose } from 'react-apollo'
import AppSync from './AppSync.js'
import ListAllItemsQuery from './Queries/ListAllItemsQuery'
import NewItemMutation from './Queries/NewItemMutation'
import DeleteItemMutation from './Queries/DeleteItemMutation'
const client = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSync.apiKey
  }
})

class App extends Component {
  state = { allItems: [] }
  render () {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <Text style={styles.welcome}>
          Welcome to Amazon AppSync
        </Text>
        <AddItemsWithData />
        <AllItemsWithData />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

// HOC lane
const AllItemsWithData = graphql(ListAllItemsQuery, {
  options: {
    fetchPolicy: 'cache-and-network'
  },
  props: (props) => ({
    // fits structure identified in query and stores in allItems
    // stores as prop.allItems
    allItems: props.data.listListItems && props.data.listListItems.items
  })
})(ListItems)

const AddItemsWithData = compose(
  graphql(NewItemMutation, {
    props: (props) => ({
      // gives prop.onAdd to child component
      // must return __typename -> not 100% sure why
      onAdd: item => props.mutate({
        variables: item,
        optimisticResponse: () => ({ createListItem: {...item, __typename: 'Item'} })
      })
    }),
    options: {
      refetchQueries: [{ query: ListAllItemsQuery }]
    }
  }),
  graphql(ListAllItemsQuery, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: (props) => ({
      allItems: props.data.listListItems && props.data.listListItems.items
    })
  }),
  graphql(DeleteItemMutation, {
    props: (props) => ({
      onDelete: item => props.mutate({
        variables: {id: item.id},
        optimisticResponse: () => ({ deleteListItem: {id: item.id, __typename: 'Item'} })
      })
    }),
    options: {
      refetchQueries: [{ query: ListAllItemsQuery }]
    }
  })
)(AddItems)

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
)

export default WithProvider
