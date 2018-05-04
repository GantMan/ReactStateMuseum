import React, { Component } from "react";
import { AddPackingItem } from "packlist-components";
import ListAllItemsQuery from "../Queries/ListAllItemsQuery";
import NewItemMutation from "../Queries/NewItemMutation";
import DeleteItemMutation from "../Queries/DeleteItemMutation";
import { graphql, compose } from "react-apollo";
const defaultState = { text: "" };

class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleAdd = () => {
    const { text } = this.state;
    this.setState(defaultState, () => {
      this.props.onAdd({
        id: new Date().getTime().toString(),
        itemName: text
      });
    });
  };

  deleteAll = () => {
    const { allItems } = this.props;
    // Delete em all
    if (allItems) {
      allItems.map(item => this.props.onDelete({ id: item.id }));
    }
  };

  render() {
    return (
      <AddPackingItem
        addItem={this.handleAdd}
        setNewItemText={e => this.setState({ text: e.target.value })}
        value={this.state.text}
        clear={this.deleteAll}
      />
    );
  }
}

// HOC Lane
export default compose(
  graphql(NewItemMutation, {
    props: props => ({
      // gives prop.onAdd to child component
      // must return __typename -> not 100% sure why
      onAdd: item =>
        props.mutate({
          variables: item,
          optimisticResponse: () => ({
            createListItem: { ...item, __typename: "Item" }
          })
        })
    }),
    options: {
      refetchQueries: [{ query: ListAllItemsQuery }]
    }
  }),
  graphql(ListAllItemsQuery, {
    options: {
      fetchPolicy: "cache-and-network"
    },
    props: props => ({
      allItems: props.data.listListItems && props.data.listListItems.items
    })
  }),
  graphql(DeleteItemMutation, {
    props: props => ({
      onDelete: item =>
        props.mutate({
          variables: { id: item.id },
          optimisticResponse: () => ({
            deleteListItem: { id: item.id, __typename: "Item" }
          })
        })
    }),
    options: {
      refetchQueries: [{ query: ListAllItemsQuery }]
    }
  })
)(AddItems);
