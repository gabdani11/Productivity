import React from 'react'
import './lower.scss'
import Calender from './calender/Calender'
import Temperature from './temperature/Temperature'

const Lower = () => {
  return (
    <div className='Lower-side'>
        <div className="quote">
            <h4>Before dead you have to live</h4>
        </div>
        <Calender/>
        <div className='bottom-right'>
          <Temperature/>
        </div>
    </div>
  )
}

export default Lower