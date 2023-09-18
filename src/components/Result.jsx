import React, { useContext } from 'react'
import styled from 'styled-components'
import { MyContx } from '../contexts/WeatherContext';

export default function Result() {

    const weather = useContext(MyContx);


    return (
        <>
            <ResCont>
                {JSON.stringify(weather.weather)}
            </ResCont>
        </>
    )
}

const ResCont = styled.div`

`

