import React from 'react'
import './InputPanel.style.css'

function InputPanel(props) {
  
  const todoRef = React.createRef()
  
  const onHandleSubmit = e => {
  	e && e.preventDefault()
  	const todo = todoRef.current.value
  	if (todo) {
  	  const action = { type: 'NEW_TODO', payload: todo }
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
	    placeholder={'enter a todo...'}
	    className={'todo-input'}
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
