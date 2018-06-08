import React from "react";
import { SimpleList } from "packlist-components";
import { connect } from "parket/react";

export default connect(({ store }) => <SimpleList value={store.allItems} />);
