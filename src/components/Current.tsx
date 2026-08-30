import type { CurrentWeather } from '../schemas/currentSchema'
import type { Location } from '../schemas/locationSchema'
import Card from './cards/Card'
import { timeFormat } from './utils/timeFormat'

type Props = {
    current : CurrentWeather,
    location : Location
}

export default function Current({current,location}: Props) {
  return (
    <Card title="">
      <div className='flex flex-col items-left'>
        <p className="text-4xl font-semibold">{location.name}</p>
        <p className="font-semibold text-gray-500">{location.country}</p>
      </div>
      <div className="flex flex-row">
        <img className="size-16" src={current.condition.icon} alt="current" />
        <div>
          <p className="text-4xl font-semibold">{current.temp_c}&deg;C</p>
          <p className="text-gray-500">{current.condition.text}</p>
        </div>
      </div>

      <div className="flex flex-row gap-1 text-">
        <p>Local time: </p>
        <p className="font-semibold">{timeFormat(Date.now()/1000)}</p>
      </div>
    </Card>
  )
}