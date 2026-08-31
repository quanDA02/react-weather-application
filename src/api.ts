import type { Coords } from "./schemas/coords";
import { weatherSchema } from "./schemas/weatherSchema"

const API_KEY = import.meta.env.VITE_API_KEY

export async function GetWeather(coords : Coords){
    const {lat,lon} = coords
    const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=7&lang=`
    )
    const data = await res.json()
    const weather =  weatherSchema.parse(data);
    const current = weather.current
    const hourly = weather.forecast.forecastday[0].hour
    const forecast = weather.forecast.forecastday
    const location = weather.location
    return {current,hourly,forecast,location}
}