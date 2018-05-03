import React, { Component } from "react";
import ListContainer from "../Unstated/listContainer";
import { Subscribe } from "unstated";
import { SimpleList } from "packlist-components";

export default class ListItems extends Component {
  render() {
    return (
      <Subscribe to={[ListContainer]}>
        {list => <SimpleList value={list.state.allItems} />}
      </Subscribe>
    );
  }
}
