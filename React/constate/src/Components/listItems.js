import React, { Component } from "react";
import { SimpleList } from "packlist-components";
import { Consumer } from "../store";

export default class ListItems extends Component {
  render() {
    return <SimpleList value={this.props.allItems} />;
  }
}
