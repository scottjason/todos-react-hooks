import React from 'react'
import './Todo.style.css'

function Todo({ todo }) {
  return (
    <div className='todo-container'>
      <p>{ todo.message }</p>
    </div>
  );
}

export default Todo
