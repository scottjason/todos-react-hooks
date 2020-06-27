import React from 'react'
import { BsPencil } from 'react-icons/bs'
import './Header.style.css'

function Header() {
  return (
    <div className="header-container">
      <h1 className="header">todos</h1>
      <hr className="line" />
      <BsPencil className="pencil-icon" />
    </div>
  )
}

export default Header
