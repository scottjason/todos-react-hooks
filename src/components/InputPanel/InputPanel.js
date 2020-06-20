import React, { createRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './InputPanel.style.css'

const InputPanel = (props) => {
  const todoRef = createRef()

  const generateTodo = (message) => ({
    id: uuidv4(),
    message,
    isCompleted: false,
    isDeleted: false,
    createdAt: Date.now(),
  })

  const onHandleSubmit = (e) => {
  	e && e.preventDefault()
  	const message = todoRef.current.value
  	if (message) {
  	  const action = { type: 'ADD_TODO', payload: generateTodo(message) }
  	  props.dispatch(action)
  	  todoRef.current.value = ''
  	}
  }
  return (
    <form
      className='input-panel-container'
      onSubmit={onHandleSubmit}
      autoComplete='off'
    >
      <input
        type='text'
        name='todo'
        ref={todoRef}
        placeholder='enter a todo...'
        className='todo-input'
      />
      <input
        type='submit'
        value='Submit'
        className='submit'
        onClick={onHandleSubmit}
      />
    </form>
  )
}

export default InputPanel
