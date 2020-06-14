import React from 'react';
import './Todos.style.css';
import Todo from '../Todo/Todo';

function Todos(props) {
  const todos = [...props.state.todos]
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default Todos;
