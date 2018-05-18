import { SimpleList } from "packlist-components/native";
import { connect } from "react-redux";

const mapStateToProps = state => ({ value: state.items.allItems });

export default connect(mapStateToProps)(SimpleList);
