const reducer = (state, action) => {

  const completeTodo = targetId => {
    return state.todos.map(todo => {
      if (todo.id === targetId) {
        todo.isDeleted = false
        todo.isCompleted = true
      }
      return todo
    })
  }

  const deleteTodo = targetId => {
    return state.todos.map(todo => {
      if (todo.id === targetId) {
        if (todo.isDeleted) {
          todo.isRemoved = true
          return todo
        }
        todo.isDeleted = true
        todo.isCompleted = false
      }
      return todo
    })
  }

  const undoTodo = targetId => {
    return state.todos.map(todo => {
      if (todo.id === targetId) {
        todo.isCompleted = false
        todo.isDeleted = false
      }
      return todo
    })
  }

  switch (action.type) {
  case 'ADD_TODO':
    return {
      ...state,
      todos: state.todos.concat(action.payload)
    }
  case 'COMPLETE_TODO':
    return {
      ...state,
      todos: completeTodo(action.payload)
    }
  case 'DELETE_TODO':
    return {
      ...state,
      todos: deleteTodo(action.payload)
    }
    case 'UNDO_TODO':
      return {
        ...state,
        todos: undoTodo(action.payload)
      }
  case 'SET_ACTIVE_TAB':
    return {
      ...state,
      view: action.payload,
    }
  default:
    return state
  }
}

export default reducer
