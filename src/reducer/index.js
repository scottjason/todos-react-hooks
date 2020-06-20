/* eslint-disable no-case-declarations */
const reducer = (state, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return {
      ...state,
      todos: state.todos.concat(action.payload),
    }
  case 'COMPLETE_TODO':
    const todos = state.todos.map(todo => {
      if (todo.id === action.payload) {
        todo.isCompleted = true
      }
      return todo
    })
    return {
      ...state,
      todos,
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
