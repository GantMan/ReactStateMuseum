import React, { Component } from "react";
import { SimpleList } from "packlist-components";
import { observer } from "controllerim";
import { ItemsController } from "../controllers";

class ListItems extends Component {
  componentWillMount() {
    this.controller = new ItemsController(this);
  }

  render() {
    const { getAllItems: allItems = [] } = this.controller;

    return <SimpleList value={allItems()} />;
  }
}

export default observer(ListItems);
