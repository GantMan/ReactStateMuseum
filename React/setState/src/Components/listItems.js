import React, { Component } from "react";
import PL from "packlist-components";

export default class SimpleList extends Component {
  render() {
    return <PL.SimpleList value={this.props.allItems} />;
  }
}
