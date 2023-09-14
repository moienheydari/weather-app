import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState({});

  async function getWeather() {
    const url = 'https://reqres.in/api/users?page=2';

    try {
      const response = await axios.get(url);
      // const result = await response.text();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="card">
        <button onClick={getWeather}>
          Click
        </button>
        <p>
          {JSON.stringify(weatherData, 5, '')}
        </p>
      </div>
    </>
  )
}

export default App
