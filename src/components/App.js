import React, { useReducer } from 'react'
import './App.style.css'
import Header from './Header/Header'
import Todos from './Todos/Todos'
import Tabs from './Tabs/Tabs'
import InputPanel from './InputPanel/InputPanel'
import reducer from '../reducer'

const initialState = { todos: [], view: 'todos' }

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <main className='app-container'>
      <Header />
      <InputPanel state={{ ...state }} dispatch={dispatch} />
      <Tabs state={{ ...state }} dispatch={dispatch} />
      <Todos state={{ ...state }} dispatch={dispatch} />
    </main>
  )
}

export default App
