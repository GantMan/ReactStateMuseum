import { SimpleList } from "packlist-components";
import { connect } from "react-redux";

const mapStateToProps = state => ({ value: state.items.myItems });

export default connect(mapStateToProps)(SimpleList);
