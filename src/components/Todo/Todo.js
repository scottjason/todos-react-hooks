import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { GrUndo } from 'react-icons/gr'
import { BsTrash, BsCheckBox } from 'react-icons/bs'
import './Todo.style.css'

const Todo = (props) => {
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

  const getContainerClass = () => {
    return todo.isCompleted || todo.isDeleted
      ? 'todo-container push-down'
      : 'todo-container'
  }

  return (
    <div className={getContainerClass()}>
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

Todo.propTypes = {
  todo: PropTypes.object,
  view: PropTypes.string.isRequired,
}

export default Todo
