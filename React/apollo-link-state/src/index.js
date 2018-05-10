/************************************************
 * This example is one of many examples
 *         -= The React State Museum =-
 * View other state management options and read
 * more in the blog post and the master repo:
 *
 * https://github.com/GantMan/ReactStateMuseum
 ************************************************/
import React, { Component } from "react";
import { render } from "react-dom";

import { ApolloProvider, Query, Mutation } from "react-apollo";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

// Client
const client = new ApolloClient({
  uri: "https://nx9zvp49q7.lp.gql.zone/graphql",
  clientState: {
    defaults: {
      allItems: ["Hot Dog"]
    },
    resolvers: {
      Mutation: {
        addItem: (_, { newItem }, { cache }) => {
          cache.writeData({ data: { allItems: [`${newItem}`] } });
          return null;
        }
      }
    }
  }
});

// Application
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Query
            query={gql`
              {
                allItems @client
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return "loading...";
              if (error) return "error...";
              console.log({ data });
              return `Yeii! ${data.allItems}`;
            }}
          </Query>
          <Mutation
            mutation={gql`
              mutation addItem($newItem: String) {
                addItem(newItem: $newItem) @client
              }
            `}
            variables={{ newItem: "lala" }}
          >
            {addItem => <button onClick={addItem}>Add Item</button>}
          </Mutation>
        </div>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
