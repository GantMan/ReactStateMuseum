import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { ApolloProvider, Query } from 'react-apollo';
import { client } from './client';
import { ALL_ITEMS } from './query';
import ListItems from './Components/listItems'
import AddItems from './Components/addItems'

export default class App extends Component {
  state = {
    newItemName: null
  }

  setNewItemName = (value) => {
    this.setState({newItemName: value})
  }

  addItem = (store, items) => {
    const newItem = this.state.newItemName;
    this.setState({ newItemName: '' }, () =>
      store.writeData({
        data: { allItems: items.concat(newItem) }
    }))
  }

  clear = (store) => {
    store.writeData({ data: { allItems: [] }})
  }

  render () {
    return (
      <ApolloProvider client={client}>
        <Query query={ALL_ITEMS}>
        {
          ({data, client: store}) => (
            <ScrollView
              contentContainerStyle={styles.container}
              keyboardShouldPersistTaps='always'
            >
              <Text style={styles.welcome}>
                Welcome to apollo-link-state
              </Text>
              <AddItems
                addItem={() => this.addItem(store, data.allItems)}
                setNewItemName={this.setNewItemName}
                newItemName={this.state.newItemName}
                clear={() => this.clear(store)}
              />
              <ListItems allItems={data.allItems} />
            </ScrollView>
          )
        }
        </Query>
      </ApolloProvider>
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
