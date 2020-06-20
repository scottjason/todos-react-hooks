import React from 'react';
import './Todos.style.css';
import Todo from '../Todo/Todo';

function Todos(props) {
  console.log("Todos props", props)
  const todos = [...props.state.todos]
  const isActive = props.state.view === 'todos'
  return (
    <div className='todos-container'>
      {isActive && todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default Todos;
