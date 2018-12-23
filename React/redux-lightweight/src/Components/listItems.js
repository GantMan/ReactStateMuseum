import { SimpleList } from "packlist-components";
import { connect } from "react-redux";

const mapStateToProps = state => ({ value: state.myItems });

export default connect(mapStateToProps)(SimpleList);
