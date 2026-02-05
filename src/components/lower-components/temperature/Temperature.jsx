import React from 'react'
import './temperature.scss'
import { useContext } from 'react'
import { useState } from 'react'
import { WeatherDataContext } from '../../../service/WeatherContext'
import { ArrowOutUpRightSquare } from '@boxicons/react'


const Temperature = () => {
  const data = useContext(WeatherDataContext)
 const [active, setActive] = useState(false)
 const [location, setlocation] = useState('')
  function handleLocation(){
    data.fetchWeatherData(location)
   
    setlocation('')
    setActive(false)
  }
  
  return (
    <div className='temperature'>
      <div className="setLocation " style={{display: active ? 'flex' : 'none'}}>
        <input type="text" placeholder='Enter your location' value={location} onChange={(e) => setlocation(e.target.value)} />
        <button onClick={()=>{
          handleLocation()
        }}>Set Location</button>
      </div>
      <div className="left-temp">
        <h3>{data.temperature.name ? data.temperature.name : "Set your location"}</h3>
        <h4>{data.temperature.main?.temp}°C</h4>

      </div>
      <div className="right-details">
        <div className="button" onClick={()=>{
          setActive(!active)
         }}><ArrowOutUpRightSquare /></div>
        <div className="detail">
          <p>Precipitation:{data.temperature.rain?.['1h'] || 0}%</p>
          <p>Humidity: {data.temperature.main?.humidity}%</p>
          <p>wind:{data.temperature.wind?.speed} km/h</p>
          
        </div>
      </div>
      </div>
  )
}

export default Temperature