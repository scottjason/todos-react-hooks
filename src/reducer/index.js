const reducer = (state, action) => {
  switch (action.type) { 
    case 'NEW_TODO':
      const todo = action.payload
      state.todos.push(todo)
      return {
        ...state,
      }
    default:
      return state
  }
}

export default reducer
