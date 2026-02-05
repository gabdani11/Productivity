import React, { useEffect } from 'react'
import { createContext } from 'react'
export const WeatherDataContext = createContext()
import axios from 'axios'
import { useState } from 'react'


const WeatherContext = ({children}) => {
  const apiKey = 'b6644530c956ad7e27334b8505287b0e'
  const [temperature, setTemperature] = useState('60%')

 async function fetchWeatherData(location) {
  try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
     setTemperature(response.data)
  }
 
  catch(error){
    console.error("Error fetching weather data:", error)
  }
 }
   
  return (
    <WeatherDataContext.Provider value={{fetchWeatherData, temperature}}>
      {children}
    </WeatherDataContext.Provider>
  )
}

export default WeatherContext