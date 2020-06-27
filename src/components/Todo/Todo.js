import React, { useState, useEffect, useRef } from 'react'
import { BsTrash } from 'react-icons/bs'
import { BsCheckBox } from 'react-icons/bs'
import { GrUndo } from 'react-icons/gr'

import './Todo.style.css'

function Todo(props) {
  const { todo } = props
  const inputRef = useRef(null)
  const [isReadOnly, setReadOnly] = useState(true)

  useEffect(() => {
    if (!isReadOnly) {
      inputRef.current.focus()
    }
  }, [isReadOnly])

  const onKeyPress = (e) => {
    if (!isReadOnly && e.key === 'Enter') {
      setReadOnly(true)
    }
  }

  return (
    <div className="todo-container">
      {!todo.isCompleted && !todo.isDeleted && (
        <p className="update" onClick={() => setReadOnly(!isReadOnly)}>
          {isReadOnly && 'UPDATE'}
          {!isReadOnly && 'COMPLETE UPDATE'}
        </p>
      )}
      <div className="icon-container">
        {!todo.isCompleted && !todo.isDeleted && (
          <BsCheckBox
            className="checkbox"
            onClick={() => props.onComplete(todo.id)}
          />
        )}
        {(todo.isCompleted || todo.isDeleted) && (
          <GrUndo className="undo" onClick={() => props.onUndo(todo.id)} />
        )}
        {props.view !== 'deleted' && (
          <BsTrash
            className="trash-can"
            onClick={() => props.onDelete(todo.id)}
          />
        )}
        {props.view === 'deleted' && (
          <BsTrash
            className="trash-can"
            onClick={() => props.onRemove(todo.id)}
          />
        )}
      </div>

      <input
        ref={inputRef}
        readOnly={isReadOnly}
        onKeyPress={onKeyPress}
        className="item-container"
        defaultValue={todo.message}
      />
    </div>
  )
}

export default Todo
