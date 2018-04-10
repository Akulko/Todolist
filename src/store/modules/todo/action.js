let newId = 3;

export const addTodo = props => ({
  type: "ADD_TODO",
  payload: {
    id: newId++,
    text: props.text,
    start: props.startMoment,
    duration: props.durationMoment,
    am: props.am,
    width: props.width,
    isComplete: false,
    isEdit: false
  }
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  payload: {
    id
  }
});

export const completeTodo = id => ({
  type: "COMPLETE_TODO",
  payload: {
    id
  }
});

export const editTodo = (id, text) => ({
  type: "EDIT_TODO",
  payload: {
    id,
    text
  }
});

export const filterTodos = filter => ({
  type: "FILTER_TODO",
  payload: {
    filter
  }
});

export const toggleHints = () => ({
  type: "TOGGLE_HINTS"
});

export const checkIntersecting = id => ({
  type: "CHECK_INTERSECTING",
  payload: {
    id
  }
});
