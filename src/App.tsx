import { GetWeather } from "./api";
import { useSuspenseQuery } from "@tanstack/react-query";
import Forecast from "./components/Forecast";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import Map from "./components/LeafletMap";
import { useState } from "react";
import type { Coords } from "./schemas/coords";
import SearchBar from "./components/search/SearchBar";

function App() {
  const [coords, setCoords] = useState<Coords>({ lat: 0, lon: 0 });

  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => GetWeather(coords),
  });

  return (
    <div className="flex flex-col gap-8">
      <SearchBar setCoords={setCoords} />
      <Map coords={coords} setCoords={setCoords} />
      <Current current={data.current} location={data.location} />
      <Hourly hourly={data.hourly} />
      <Forecast forecast={data.forecast} />
    </div>
  );
}

export default App;
