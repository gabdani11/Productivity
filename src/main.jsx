import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import WeatherContext from './service/WeatherContext.jsx'

createRoot(document.getElementById('root')).render(
  <WeatherContext>
    <App/>

  </WeatherContext>
   
  
)
