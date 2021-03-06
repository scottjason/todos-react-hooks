import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo'
import './Todos.style.css'

const Todos = (props) => {
  let todos = [...props.state.todos]
  const { dispatch } = props

  const isCompletedActive = props.state.view === 'completed'
  const isDeletedActive = props.state.view === 'deleted'

  if (isCompletedActive) {
    todos = todos.filter((todo) => {
      return todo.isCompleted
    })
  } else if (isDeletedActive) {
    todos = todos.filter((todo) => {
      return todo.isDeleted
    })
  } else {
    todos = todos.filter((todo) => {
      return !todo.isCompleted && !todo.isDeleted
    })
  }

  const generateAction = (type, todoId) => {
    return {
      type,
      payload: todoId,
    }
  }

  const onComplete = (todoId) => {
    const type = 'COMPLETE_TODO'
    const action = generateAction(type, todoId)
    dispatch(action)
  }

  const onDelete = (todoId) => {
    const type = 'DELETE_TODO'
    const action = generateAction(type, todoId)
    dispatch(action)
  }

  const onRemove = (todoId) => {
    const type = 'REMOVE_TODO'
    const action = generateAction(type, todoId)
    dispatch(action)
  }

  const onUndo = (todoId) => {
    const type = 'UNDO_TODO'
    const action = generateAction(type, todoId)
    dispatch(action)
  }

  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onUndo={onUndo}
          onDelete={onDelete}
          onRemove={onRemove}
          onComplete={onComplete}
          view={props.state.view}
        />
      ))}
    </div>
  )
}

Todos.propTypes = {
  todo: PropTypes.object.isRequired,
  view: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Todos
