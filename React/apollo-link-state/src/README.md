## Running this example

If you use yarn, run:
`yarn && yarn start`

If you use npm, run:
`npm i && npm run start`

## Tutorial

This example is created for apollo link state for state managment. The following tutorial describe the step-to-step guide for cloning the code functionality.

### Instalation

```bash
yarn add react-apollo graphql apollo-boost
```

* `react-apollo`: React Components from Apollo. Provider, Query, Mutation, etc.
* `graphql`: We are using graphql :P
* `apollo-boost`: Container package for apollo utilities. Provides us a simple and fast default configuration for start using apollo (includes `apollo-link-state`).

### Code

```jsx
import React, { Component } from "react";
import { render } from "react-dom";

import { ApolloProvider, Query, Mutation } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

// Graphql queries and mutations.
// Use "@client" for local state queries.
const ALL_ITEMS = gql`
  {
    allItems @client
  }
`;
const ADD_ITEMS = gql`
  mutation addItem($newItem: String) {
    addItem(newItem: $newItem) @client
  }
`;
const CLEAN_ITEMS = gql`
  mutation cleanItems($items: String) {
    cleanItems(items: $items) @client
  }
`;

// Apollo configuration:
const client = new ApolloClient({
  // Use "uri" as your API endpoint (default is "/graphql")
  uri: "https://nx9zvp49q7.lp.gql.zone/graphql",

  // Define your local state methods:
  // "defaults": Our initial state.
  // "resolvers" Here live our actions (updating state functions)
  clientState: {
    defaults: {
      allItems: ["Hot Dog", "Pizza", "Donuts"]
    },
    resolvers: {
      Mutation: {
        addItem(_, params, { cache }) {
          // If you need the previous state use "cache.readQuery"
          const { allItems } = cache.readQuery({ query: ALL_ITEMS });
          const data = { allItems: allItems.concat([newItem]) };
          // Update state using "cache.writeData"
          cache.writeData({ data });
          return null; // always return null
        },
        cleanItems(_, params, { cache }) {
          // You don't need to read the previous state all the times
          const data = { allItems: [] };
          cache.writeData({ data });
          return null; // always is always
        }
      }
    }
  }
});

// And finally, rendering our aplication
class App extends Component {
  state = {
    // Don't use React state for storing items,
    // just use newItem for input controlling :D
    newItem: ""
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={queries.ALL_ITEMS}>
          {({ loading, error, data }) => {
            if (loading) return "loading...";
            if (error) return "error...";

            // No error, no loading... Its working!!!
            return (
              <div>
                <h2>Welcome to Apollo Link State</h2>

                <input
                  type="text"
                  {/* This is the controled input state */}
                  value={this.state.newItem}
                  onChange={e => this.setState({ newItem: e.target.value })}
                />

                <Mutation
                  mutation={ADD_ITEMS}
                  variables={{ newItem: this.state.newItem }}
                >
                  {addItem => <button onClick={addItem}>Add Item</button>}
                </Mutation>

                <Mutation mutation={CLEAN_ITEMS}>
                  {cleanItems => (
                    <button onClick={cleanItems}>Clean Items</button>
                  )}
                </Mutation>

                <ul>
                  {data.allItems.map((item, index) => (
                    <li key={item + index}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
```

Please, dont keep all your code inside onu file. Use an "store" folder for clean code.
