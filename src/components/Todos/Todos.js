import React from 'react'
import Todo from '../Todo/Todo'
import './Todos.style.css'

function Todos(props) {
  let todos = [...props.state.todos]
  const { dispatch } = props
	
  const isCompletedActive = props.state.view === 'completed'
  const isDeletedActive = props.state.view === 'deleted'

  if (isCompletedActive) {
    todos = todos.filter(todo => {
      return todo.isCompleted
    })
  } else if (isDeletedActive) {
    todos = todos.filter(todo => {
      return todo.isDeleted && !todo.isRemoved
    })
  } else {
    todos = todos.filter(todo => {
      return !todo.isCompleted && !todo.isDeleted
    })
  }
	
  const generateAction = (type, todoId) => {
    return {
      type,
      payload: todoId,
    }
  }

  const onComplete = todoId => {
    const type = 'COMPLETE_TODO'
    const action = generateAction(type, todoId)
    dispatch(action)
  }

  const onUndo = todoId => {
    const type = 'UNDO_TODO'
    const action = generateAction(type, todoId)
    dispatch(action)
  }

  const onDelete = todoId => {
    const type = 'DELETE_TODO'
    const action = generateAction(type, todoId)
    dispatch(action)
  }
	
  return (
    <div className='todos-container'>
      {todos.map(todo => (
        <Todo
          todo={todo}
          key={todo.id}
          onUndo={onUndo}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  )
}

export default Todos
