const initialState = {
  items: [
    {
      id: 0,
      text: "Hello, here is Todo List! Now you can plan your day with me!",
      start: "2018-04-11T05:00:14.326Z",
      duration: "2018-04-11T05:45:16.788Z",
      am: {
        start: "am",
        duration: "am"
      },
      width: 0,
      isComplete: false,
      isEdit: false
    },
    {
      id: 1,
      text: "I have a nine-hour day, so after 5:00 PM you can go on leisure!",
      start: "2018-04-11T07:00:03.246Z",
      duration: "2018-04-11T08:00:05.023Z",
      am: {
        start: "am",
        duration: "am"
      },
      width: 0,
      isComplete: false,
      isEdit: false
    },
    {
      id: 2,
      text: "If you want — you can try to drag'n'drop me c:",
      start: "2018-04-11T00:00:53.296Z",
      duration: "2018-04-11T02:00:01.225Z",
      am: {
        start: "pm",
        duration: "pm"
      },
      width: 0,
      isComplete: false,
      isEdit: false
    }
  ],
  filter: "ALL",
  isHintsOn: true,
  hints: [
    {
      type: "dragndrop",
      text:
        "You can change time of your task. Just press on him and drag up or down. Yaw!"
    },
    {
      type: "edit",
      text:
        "If you just want to edit your task, you dont need to delete it. Just click on him, write what you want and press enter then. Jeeez!"
    }
  ]
};

function editTodo(items, id, text) {
  const index = items.findIndex(item => item.id === id);
  const newItems = items.slice();
  const newItem = newItems[index];
  newItems[index] = { ...newItem, isEdit: !newItem.isEdit, text };
  return newItems;
}

function removeTodo(items, id) {
  const newItems = items.filter(item => item.id !== id);
  return newItems;
}

function checkIntersecting(items, id) {
  let widthDivider = 0;
  const index = items.findIndex(item => item.id === id);
  const newItems = items.slice();
  const newItem = newItems[index];
  items.forEach(b => {
    if (
      b !== newItem &&
      newItem.start < b.duration &&
      newItem.duration > b.start
    ) {
      widthDivider++;
    }
  });
  return widthDivider;
}

function completeTodo(items, id) {
  const index = items.findIndex(item => item.id === id);
  const newItems = items.slice();
  const newItem = newItems[index];
  newItem.isComplete
    ? (newItem.backgroundColor = "#defddf")
    : (newItem.backgroundColor = "#e2ecf5");
  newItems[index] = {
    ...newItem,
    isComplete: !newItem.isComplete,
    backgroundColor: newItem.backgroundColor
  };
  return newItems;
}

function reducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        items: [...state.items, payload]
      };
    case "REMOVE_TODO":
      return {
        ...state,
        items: removeTodo(state.items, payload.id)
      };
    case "COMPLETE_TODO":
      return {
        ...state,
        items: completeTodo(state.items, payload.id)
      };
    case "EDIT_TODO":
      return {
        ...state,
        items: editTodo(state.items, payload.id, payload.text)
      };
    case "FILTER_TODO":
      return {
        ...state,
        filter: payload.filter
      };
    case "TOGGLE_HINTS":
      return {
        ...state,
        isHintsOn: !state.isHintsOn
      };
    case "CHECK_INTERSECTING":
      return {
        ...state,
        items: checkIntersecting(state.items, payload.id)
      };
    default:
      return state;
  }
}

export default reducer;
