import React from "react";
import { SimpleList } from "packlist-components";
import { connect } from "unistore/react";
import { actions } from "../store";

export default connect(["allItems"], actions)(
  ({ allItems }) => <SimpleList value={allItems} />
);
