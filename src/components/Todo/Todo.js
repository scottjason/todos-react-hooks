import React, { useState, useEffect, useRef } from 'react'
import { BsTrash } from 'react-icons/bs'
import { BsCheckBox } from 'react-icons/bs'
import './Todo.style.css'

function Todo(props) {
  const { todo } = props
  const inputRef = useRef(null)
  const [isReadOnly, setReadOnly] = useState(true)
  
  useEffect(() => {
    if (!isReadOnly) {
      inputRef.current.focus()
    }
  })

  return (
    <div className='todo-container'>
      <p 
        className='update'
        onClick={() => setReadOnly(!isReadOnly)}
      >
        {isReadOnly && 'UPDATE'}
        {!isReadOnly && 'COMPLETE UPDATE'}
      </p>
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
      <input
        ref={inputRef}
        readOnly={isReadOnly}
        className='item-container'
        placeholder={todo.message}
      />
    </div>    
  )
}

export default Todo
