import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import {
  removeTodo,
  completeTodo,
  editTodo,
  toggleHints,
  checkIntersecting
} from "../store/modules/todo/action";

function filter(items, filter) {
  switch (filter) {
    case "ALL":
      return items;
    case "COMPLETED":
      return items.filter(item => item.isComplete === true);
    case "INCOMPLETED":
      return items.filter(item => item.isComplete === false);
    default:
      return items;
  }
}

const mapReduxToProps = redux => {
  return {
    todos: filter(redux.todos.items, redux.todos.filter),
    isHintsOn: redux.todos.isHintsOn,
    hints: redux.todos.hints
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRemove: id => dispatch(removeTodo(id)),
    edit: (id, text) => dispatch(editTodo(id, text)),
    toggleComplete: id => dispatch(completeTodo(id)),
    toggleHints: () => dispatch(toggleHints()),
    checkIntersecting: (start, duration) =>
      dispatch(checkIntersecting(start, duration))
  };
};

export default connect(mapReduxToProps, mapDispatchToProps)(TodoList);
