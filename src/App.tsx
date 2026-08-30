import { GetWeather } from "./api"
import { useSuspenseQuery } from "@tanstack/react-query"
import Forecast from "./components/Forecast"
import Current from "./components/Current"
import Hourly from "./components/Hourly"
import Location from "./components/Location"
function App() {
  const { data } = useSuspenseQuery({
    queryKey : ["weather"],
    queryFn : () => GetWeather("vinh")
  })
  return (
    <div className="flex flex-col gap-8">
      <Current current={data.current} location={data.location}/>
      <Hourly hourly={data.hourly}/>
      <Forecast forecast={data.forecast}/>
      <Location location={data.location}/>
    </div> 
  )
}

export default App
