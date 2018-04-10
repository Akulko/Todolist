import { filterTodos } from "../store/modules/todo/action";
import Options from "../components/Options";
import { connect } from "react-redux";

const mapReduxToProps = redux => {
  return {
    filter: redux.todos.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filter: filterType => dispatch(filterTodos(filterType))
  };
};

export default connect(mapReduxToProps, mapDispatchToProps)(Options);
