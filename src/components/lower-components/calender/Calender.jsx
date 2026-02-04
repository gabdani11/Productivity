import React from 'react'
import './calender.scss'
import { useEffect, useState } from 'react';

const Calender = () => {

    const[date,setDate]=React.useState(new Date());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    useEffect(()=>{
        const today = new Date();
        const day = today.getDate();
        setDate(day);
        

    },[])

  return (
    <div className='calender'>
        <h5>{months[new Date().getMonth()]}</h5>
        <div className="dates">
            <div className="week">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
            
            </div>
            <div className="days-number">
           {Array.from({ length: 31 }, (_, i) => (
            <span className={i + 1 === date ? "balls" : ""} key={i} id={`day-${i + 1}`}>
              {i + 1}
            </span>
      ))}
           </div>

        </div>
    </div>
  )
}

export default Calender