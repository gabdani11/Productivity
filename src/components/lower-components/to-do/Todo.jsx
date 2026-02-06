import React from 'react'
import './todo.scss'
import { ArrowOutUpRightSquare } from '@boxicons/react'

const Todo = () => {
  return (
    <div className='todo'>
        <div className='list'>
            <h4>To-Do List</h4>
        <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
        </ul>
        </div>
        <div className="button"><ArrowOutUpRightSquare /></div>
        
        </div>
  )
}

export default Todo