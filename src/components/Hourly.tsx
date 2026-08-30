import Card from "./cards/Card"
import type { Hourly } from "../schemas/hourlySchema"
import Icon from "./img/Icon"
import { timeFormat } from "./utils/timeFormat"

type Props = {
    hourly : Hourly
}

export default function Hourly({hourly}: Props) {
  return (
    <Card title="Hourly weather">
      <div className="flex gap-4 overflow-x-scroll">  
        {hourly.map(hour=>(
          <div className="flex flex-col gap-2 items-center rounded-2xl p-2 border">
            <p className="whitespace-nowrap">
              {timeFormat(hour.time_epoch)}
            </p>
            <Icon icon={hour.condition.icon} alt={hour.condition.text}/>
            <p>{Math.round(hour.heatindex_c)}&deg;C</p>
          </div>
        ))}
      </div>
    </Card>
  )
}