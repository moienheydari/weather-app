import { useState } from 'react'
import './App.css'
import getWeather from './api/weatherApi';

function App() {
  const [weatherData, setWeatherData] = useState({});


  return (
    <>
      <div className="card">
        <button onClick={async () => { setWeatherData(await (getWeather('tehran'))) }}>
          Click
        </button>
        <p>
          {JSON.stringify(weatherData, null, 2)}
        </p>
      </div>
    </>
  )
}

export default App
