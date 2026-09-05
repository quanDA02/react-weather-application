import type { CurrentWeather } from "../schemas/currentSchema";
import type { Location } from "../schemas/locationSchema";
import Card from "./cards/Card";
import WeatherCondition from "./cards/WeatherCondition";
import { timeFormat } from "./utils/timeFormat";

type Props = {
  current: CurrentWeather;
  location: Location;
};

export default function Current({ current, location }: Props) {
  return (
    <Card title="Current Weather">
      <div className="justify-items-center">
        <div className="flex flex-col items-left">
          <p className="text-4xl font-semibold">{location.name}</p>
          <p className="font-semibold text-gray-500">
            {location.region != "" ? location.region + ", " : ""}
            {location.country}
          </p>
        </div>
        <div className="flex flex-row">
          <img className="size-16" src={current.condition.icon} alt="current" />
          <div>
            <p className="text-4xl font-semibold">{current.temp_c}&deg;C</p>
            <p className="text-gray-500">{current.condition.text}</p>
          </div>
        </div>
        <div className="flex flex-row gap-1 text-">
          <p>Last updated: </p>
          <p className="font-semibold">
            {timeFormat(current.last_updated_epoch)}
          </p>
        </div>
        <div className="flex flex-row gap-8 pt-2">
          <WeatherCondition
            title="Feels like"
            number={current.feelslike_c}
            unit="&deg;C"
          />
          <WeatherCondition
            title="Humidity"
            number={current.humidity}
            unit="%"
          />
          <WeatherCondition
            title="Wind"
            number={current.wind_kph}
            unit="km/h"
          />
        </div>
      </div>
    </Card>
  );
}
