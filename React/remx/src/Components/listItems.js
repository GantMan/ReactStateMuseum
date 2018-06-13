import { SimpleList } from "packlist-components";
import { connect } from "remx";

function mapStateToProps(ownProps) {
  return {
    value: ownProps.store.getItems()
  };
}

export default connect(mapStateToProps)(SimpleList);
