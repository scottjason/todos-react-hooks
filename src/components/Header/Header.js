import React from 'react'
import './Header.style.css'

function Header(props) {
  
  const numTodos = props.state.todos.length
  
  const generateHeaderCopy = () => {  
    if (numTodos.length > 0) {
      return numTodos.length === 1 ? `You have ${numTodos} Todo` : `You have ${numTodos} Todos`
    } else {
      return `You have no todos, enter a new todo to get started.`
    }
	}

  const headerCopy = generateHeaderCopy()

  return (
    <div className='header-container'>
      <header>{headerCopy}</header>
    </div>
  )
}

export default Header
