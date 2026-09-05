import type { ForecastDay } from "@/schemas/forecastSchema";
import SmallCard from "../cards/SmallCard";
import Icon from "../img/Icon";
import { dateFormat } from "../utils/dateFormat";
import {
  Droplet,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  Wind,
} from "lucide-react";

type Props = {
  day: ForecastDay;
};

export default function ForecastDays({ day }: Props) {
  return (
    <SmallCard title={dateFormat(day.date_epoch)} date={day.date}>
      <div className="flex flex-col gap-1 items-center pl-2">
        <Icon icon={day.day.condition.icon} alt={day.day.condition.text} />
      </div>
      <div className="flex flex-row gap-1 font-semibold">
        <Thermometer />
        <p className="text-white">{Math.round(day.day.avgtemp_c)} &deg;C</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1">
          <ThermometerSnowflake className="text-red-500" />
          <p className="text-red-500">{Math.round(day.day.mintemp_c)} &deg;C</p>
        </div>
        <div className="flex flex-row gap-1">
          <ThermometerSun className="text-blue-500" />
          <p className="text-blue-500">
            {Math.round(day.day.maxtemp_c)} &deg;C
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 pr-2">
        <div className="flex flex-row gap-1">
          <Wind className="text-blue-400" />
          <p className="text-blue-400">{day.day.avgvis_km} km/h</p>
        </div>
        <div className="flex flex-row gap-1">
          <Droplet className="text-blue-400" />
          <p className="text-blue-400">{day.day.avghumidity} %</p>
        </div>
      </div>
    </SmallCard>
  );
}
