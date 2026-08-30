import Card from "./cards/Card"
import type { Hourly } from "../schemas/hourlySchema"
import Icon from "./img/Icon"
import { time } from "console"

type Props = {
    hourly : Hourly
}

export default function Hourly({hourly}: Props) {
  return (
    <Card title="Hourly weather">
      <div className="flex gap-4 overflow-scroll">  
        {hourly.map(hour=>(
          <div key={hour.time_epoch}>
            <p>{new Date(hour.time_epoch*1000).toDateString()}</p>
            <Icon icon={hour.condition.icon} alt={hour.condition.text}/>
          </div>
        ))}
      </div>
    </Card>
  )
}