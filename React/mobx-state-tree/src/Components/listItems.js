import React, { Component } from "react";
import { SimpleList } from "packlist-components";
import { observer, inject } from "mobx-react";

@inject("listStore")
@observer
export default class ListItems extends Component {
  render() {
    return <SimpleList value={[...this.props.listStore.allItems]} />;
  }
}
