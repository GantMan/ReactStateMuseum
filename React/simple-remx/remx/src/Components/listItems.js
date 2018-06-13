import { SimpleList } from "packlist-components";
import { connect } from "remx";

import { store } from '../remx/store';

function mapStateToProps(ownProps) {
  return {
    value: store.getItems()
  };
}

export default connect(mapStateToProps)(SimpleList);
