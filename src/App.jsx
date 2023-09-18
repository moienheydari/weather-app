import './css/App.css'
import Header from './components/Header'
import styled from 'styled-components'
import Temp from './assets/Temp.avif'
import Main from './components/Main'
import { useState } from 'react'
import WeatherContext from './contexts/WeatherContext'

export default function App() {
  const [headerShow, setHeaderShow] = useState('Search');

  return (
    <Whole className='App'>
      <WeatherContext>
        <Header handleHeaderShow={setHeaderShow} />
        <Main show={headerShow} />
      </WeatherContext>
    </Whole>
  )
}


const Whole = styled.div`
  background: url(${Temp}) no-repeat center center/cover;
`

