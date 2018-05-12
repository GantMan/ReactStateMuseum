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

import { Provider, Query, Mutation, client, queries, mutations } from "./store";

const styles = {
  div: {
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  ul: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 0
  },
  li: {
    borderBottom: "1px solid blue",
    display: "block",
    padding: "7.5px 2.5px 5px",
    width: "100px",
    margin: "0 30%"
  },
  input: {
    backgroundColor: "#7a7eff",
    padding: "7.5px"
  },
  addButton: {
    backgroundColor: "#ccfecc",
    borderRadius: "4px",
    margin: "2px 5px",
    padding: "7.5px"
  },
  cleanButton: {
    backgroundColor: "#feaaaa",
    borderRadius: "4px",
    margin: "2px 5px",
    padding: "7.5px"
  }
};

// Application
class App extends Component {
  state = { newItem: "" };

  render() {
    return (
      <Query query={queries.ALL_ITEMS}>
        {({ loading, error, data }) => {
          if (loading) return "loading...";
          if (error) return "error...";

          return (
            <div style={styles.div}>
              <h2>Welcome to Apollo Link State</h2>

              <input
                type="text"
                style={styles.input}
                value={this.state.newItem}
                onChange={e => this.setState({ newItem: e.target.value })}
              />
              <Mutation
                mutation={mutations.ADD_ITEMS}
                variables={{ newItem: this.state.newItem }}
              >
                {addItem => (
                  <button style={styles.addButton} onClick={addItem}>
                    Add Item
                  </button>
                )}
              </Mutation>
              <Mutation mutation={mutations.CLEAN_ITEMS}>
                {cleanItems => (
                  <button style={styles.cleanButton} onClick={cleanItems}>
                    Clean Items
                  </button>
                )}
              </Mutation>

              <ul style={styles.ul}>
                {data.allItems.map((item, index) => (
                  <li key={item + index} style={styles.li}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

render(
  <Provider client={client}>
    <App />
  </Provider>,
  document.getElementById("root")
);
