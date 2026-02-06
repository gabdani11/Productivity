import React from 'react'
import './lower.scss'
import Calender from './calender/Calender'
import Temperature from './temperature/Temperature'
import Todo from './to-do/Todo'
import Quote from './quote/Quote'

const Lower = () => {
  return (
    <div className='Lower-side'>
        <div className="quote">
            <Quote/>
        </div>
        <Calender/>
        <div className='bottom-right'>
          <Temperature/>
          <Todo/>
        </div>
    </div>
  )
}

export default Lower