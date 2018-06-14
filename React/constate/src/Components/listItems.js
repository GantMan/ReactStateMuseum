import React, { Component } from "react";
import { SimpleList } from "packlist-components";
import { ItemsContainer } from "../container";

export default class ListItems extends Component {
  render() {
    return (
      <ItemsContainer context="items">
        {/* Danger! "allItems" is undefined in mounting...
          And it means FATAL ERROR! */}
        {({ allItems = [] }) => <SimpleList value={allItems} />}
      </ItemsContainer>
    );
  }
}
