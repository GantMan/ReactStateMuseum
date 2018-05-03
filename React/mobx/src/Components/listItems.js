import React, { Component } from "react";
import { SimpleList } from "packlist-components";

import ListStore from "../Mobx/listStore";
import { observer } from "mobx-react";

@observer
export default class ListItems extends Component {
  render() {
    return <SimpleList value={[...ListStore.allItems]} />;
  }
}
