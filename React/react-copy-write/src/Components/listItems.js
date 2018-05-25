import React, { Component } from "react";
import { SimpleList } from "packlist-components";
import { Consumer } from "../store";

export default class ListItems extends Component {
  render() {
    return (
      <Consumer selector={state => state.allItems}>
        {allItems => <SimpleList value={allItems} />}
      </Consumer>
    );
  }
}
