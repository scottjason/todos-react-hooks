import React from 'react';
import './Todos.style.css';
import Todo from '../Todo/Todo';

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
        return todo.isDeleted
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

  const onDelete = todoId => {
      const type = 'DELETE_TODO'
      const action = generateAction(type, todoId)
      dispatch(action)
  }
  
  return (
    <div className='todos-container'>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Todos;
