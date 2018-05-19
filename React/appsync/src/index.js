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
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItems";
// The AppSync Import Bus
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { ApolloProvider } from "react-apollo";
import AppSync from "./AppSync.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const client = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSync.apiKey
  }
});

export default class App extends Component {
  state = { allItems: [] };

  render() {
    return (
      <div style={styles}>
        <h2>Welcome to GraphQL + Amazon AppSync</h2>
        <em>
          Please be clean in your list, as this is shared across all examples
        </em>
        <AddItems />
        <ListItems />
      </div>
    );
  }
}

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);

render(<WithProvider />, document.getElementById("root"));
