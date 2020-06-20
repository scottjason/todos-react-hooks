import React, { useState } from 'react'
import './Tabs.style.css'

const Tabs = props => {
  const [isHovered, setHovered] = useState('tab-0')
  const [isActive, setActive] = useState('tab-0')
  const { dispatch } = props

  const viewMap = {
    'tab-0': 'todos',
    'tab-1': 'completed',
    'tab-2': 'deleted',
  }

  const generateClass = className => {
    return (className === isHovered || className === isActive) ? `${className} hovered` : className.split(' ')[0]
  }

  const onMouseEnter = className => {
     if (className !== isHovered) {
      setHovered(className)
     }
  }

  const onMouseLeave = className => {
    if (className === isHovered) {
      setHovered('')
    }
  }

  const generateAction = (type, className) => {

    return {
      type,
      payload: viewMap[className],
    }
  }

  const onSelect = className => {
    if (className !== isActive) {
      setActive(className)
      const type = 'SET_ACTIVE_TAB'
      const action = generateAction(type, className)
      dispatch(action)
    }
  }

  return (
    <div className='tabs-container'>
      <ul className='tabs'>
        <li
          onMouseEnter={() => onMouseEnter('tab-0')}
          onMouseLeave={() => onMouseLeave('tab-0')}
          onClick={() => onSelect('tab-0')}
          className={generateClass('tab-0')}>
            todos
        </li>
        <li
          onMouseEnter={() => onMouseEnter('tab-1')}
          onMouseLeave={() => onMouseLeave('tab-1')}
          onClick={() => onSelect('tab-1')}
          className={generateClass('tab-1')}>
            completed
        </li>
        <li
        onMouseEnter={() => onMouseEnter('tab-2')}
        onMouseLeave={() => onMouseLeave('tab-2')}
        onClick={() => onSelect('tab-2')}
        className={generateClass('tab-2')}>
            deleted
        </li>
      </ul>
    </div>
  )
}

export default Tabs
