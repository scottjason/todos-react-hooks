const reducer = (state, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return {
      ...state,
      todos: state.todos.concat(action.payload),
    }
  case 'SET_ACTIVE_TAB':
    return {
      ...state,
      view: action.payload
    }
  default:
    return state
  }
}

export default reducer
