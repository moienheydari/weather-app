import './css/App.css'
import Header from './components/Header'
import styled from 'styled-components'
import Temp from './assets/Temp.avif'
import Main from './components/Main'
import { useState } from 'react'

export default function App() {
  const [headerShow, setHeaderShow] = useState('Search');

  return (
    <Whole className='App'>
      <Header handleHeaderShow={setHeaderShow} />
      <Main show={headerShow} />
    </Whole>
  )
}


const Whole = styled.div`
  background: url(${Temp}) no-repeat center center/cover;
`

