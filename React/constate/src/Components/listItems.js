import React, { Component } from "react";
import { SimpleList } from "packlist-components";
import { ItemsContainer } from "../container";

export default class ListItems extends Component {
  render() {
    return (
      <ItemsContainer context="items">
        {({ allItems }) => <SimpleList value={allItems} />}
      </ItemsContainer>
    );
  }
}
