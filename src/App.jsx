import React from 'react'
import Navbar from './components/navbar/Navbar'
import Time from './components/time/Time'
import Lower from './components/lower-components/lower'

const App = () => {
  return (
    <div className='main'>
      <Navbar/>
      <Time/>
      <Lower/>
    </div>
  )
}

export default App