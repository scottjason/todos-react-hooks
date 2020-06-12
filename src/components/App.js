import React, { useReducer } from 'react'
import './App.style.css'
import Header from './Header/Header'
import Todos from './Todos/Todos'
import InputPanel from './InputPanel/InputPanel'
import reducer from '../reducer/'

const initialState = { todos: [] }

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='app-container'>
      <Header state={{ ...state }} dispatch={ dispatch } />
      <InputPanel state={{ ...state }} dispatch={ dispatch } />
      <Todos state={{ ...state }} dispatch={ dispatch } />
    </div>
  )
}

export default App
