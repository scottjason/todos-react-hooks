import React from 'react';
import './Todos.style.css';

function Todos(props) {
  console.log('todos', props)
  return (
    <div className='todos-container'>
      <p>Todos</p>
    </div>
  );
}

export default Todos;
