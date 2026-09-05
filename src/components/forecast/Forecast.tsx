import type { Forecast } from "../../schemas/forecastSchema";
import Card from "../cards/Card";
import ForecastDays from "./ForecastDays";

type Props = {
  forecast: Forecast;
};

export default function Forecast({ forecast }: Props) {
  return (
    <Card title="Forecast">
      <div className="flex flex-col gap-4">
        {forecast.map((day) => (
          <ForecastDays key={day.date_epoch} day={day} />
        ))}
      </div>
    </Card>
  );
}
