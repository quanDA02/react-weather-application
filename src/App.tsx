import { GetWeather } from "./api";
import { useSuspenseQuery } from "@tanstack/react-query";
import Forecast from "./components/forecast/Forecast";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import Map from "./components/LeafletMap";
import { useState } from "react";
import type { Coords } from "./schemas/coords";
import Navbar from "./components/nav/Navbar";

function App() {
  const [coords, setCoords] = useState<Coords>({ lat: 0, lon: 0 });

  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => GetWeather(coords),
  });

  return (
    <div className="flex flex-col p-6 gap-8">
      <div className="w-full flex justify-center sticky top-0 z-1002 bg-background p-2">
        <Navbar setCoords={setCoords} />
      </div>
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-3 gap-8">
        <div className="row-span-1 md:col-span-2 2xl:col-span-3 2xl:row-span-2 md:order-1">
          <Map coords={coords} setCoords={setCoords} />
        </div>
        <div className="row-span-1 md:col-span-1 2xl:col-span-1 2xl:row-span-1 md:order-2">
          <Current current={data.current} location={data.location} />
        </div>
        <div className="row-span-1 md:col-span-2 2xl:col-span-4 2xl:row-span-1 md:order-4">
          <Hourly hourly={data.hourly} />
        </div>
        <div className="row-span-1 md:col-span-1 2xl:col-span-1 2xl:row-span-1 md:order-3">
          <Forecast forecast={data.forecast} />
        </div>
      </div>
    </div>
  );
}

export default App;
