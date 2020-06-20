import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { BsCheckBox } from 'react-icons/bs'
import './Todo.style.css'

function Todo(props) {
	const { todo } = props;
  return (
  	<div className='todo-container'>
	    <div className='icon-container'>
	      <BsCheckBox
	        className='checkbox'
	        onClick={() => props.onComplete(todo.id)}
	       />
	      <BsTrash
	        className='trash-can'
					onClick={() => props.onDelete(todo.id)}
	      />
	    </div>
	    <div className='item-container'>
	      <p>{ todo.message }</p>
	    </div>
  	</div>    
  );
}

export default Todo
