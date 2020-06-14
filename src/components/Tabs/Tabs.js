import React, { useState } from 'react'
import './Tabs.style.css'

const Tabs = props => {
  const [isHovered, setHovered] = useState('tab-0')

  const generateClass = className => {
    return className === isHovered ? `${className} hovered` : className;
  }

  const onMouseEnter = className => {
    return className !== isHovered ? setHovered(className) : className.split('')[0];
  }

  return (
    <div className='tabs-container'>
      <ul className='tabs'>
        <li
          onMouseEnter={() => onMouseEnter('tab-0')}
          className={generateClass('tab-0')}>
            todos
        </li>
        <li
          onMouseEnter={() => onMouseEnter('tab-1')}
          className={generateClass('tab-1')}>
            completed
        </li>
        <li
        onMouseEnter={() => onMouseEnter('tab-2')}
        className={generateClass('tab-2')}>
            deleted
        </li>
      </ul>
    </div>
  )
}

export default Tabs
