import React, { createContext, useState } from 'react'

export const MyContx = createContext({});

export default function WeatherContext({ children }) {
    const [weather, setWeather] = useState({});

    return (
        <MyContx.Provider value={{ weather: weather, setWeather: setWeather }}>
            {children}
        </MyContx.Provider>
    )
}