import React, { useState, useEffect } from 'react'
import { BsPencil } from 'react-icons/bs';


import './Header.style.css'

function Header(props) {

  const [headerCopy, setHeaderCopy] = useState('')

  const generateHeaderCopy = () => {
    const numTodos = props.state.todos.length    
    if (numTodos > 0) {
      return numTodos === 1 ? `you have ${numTodos} todo` : `you have ${numTodos} todos`
    } else {
      return `you have no todos, enter a new todo to get started`
    }
	}
  
  const updatedHeader = generateHeaderCopy()
  useEffect(() => {
    setHeaderCopy(updatedHeader)
  }, [updatedHeader])

  return (
    <div className='header-container'>
      <h1 className='header'>todos</h1>
      <hr className='line'/>
      <BsPencil className='pencil-icon' />
    </div>
  )
}

export default Header
