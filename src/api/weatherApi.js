import axios from 'axios'

export default async function getWeather(loc) {
    const weatherApiKey = import.meta.env.VITE_WEATHERAPIKEY;
    const location = loc;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`;

    try {
        const response = await axios.get(url);
        if (response) {
            return (response);
        }
    } catch (error) {
        console.error(error);
    }
}