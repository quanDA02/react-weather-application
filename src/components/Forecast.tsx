import type { Forecast } from "../schemas/forecastSchema"
import Card from "./cards/Card"
import Icon from "./img/Icon"
import { dateFormat } from "./utils/dateFormat"

type Props = {
    forecast : Forecast,
}

export default function Forecast({forecast}: Props) {
  return (
    <Card title="Forecast">
      <div className="flex flex-col gap-4">  
        {forecast.map((day)=>(
          <div key={day.date_epoch} className="flex justify-between">
            <p className="w-10">{dateFormat(day.date_epoch)}</p>
            <Icon icon={day.day.condition.icon} alt={day.day.condition.text}/>
            <p className="text-white">{Math.round(day.day.avgtemp_c)} &deg;C</p>
            <p className="text-gray-500">{Math.round(day.day.mintemp_c)} &deg;C</p>
            <p className="text-gray-500">{Math.round(day.day.maxtemp_c)} &deg;C</p>
          </div>
        ))}
      </div>
    </Card>
  )
}