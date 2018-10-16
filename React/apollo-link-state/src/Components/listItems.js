import React, { Component } from "react";
import { SimpleList } from "packlist-components";
import { graphql } from "react-apollo"
import { items } from "../Queries";

@graphql(items)
export default class ListItems extends Component {
  render() {
    const { data: { items } } = this.props
    return <SimpleList value={items} />;
  }
}
