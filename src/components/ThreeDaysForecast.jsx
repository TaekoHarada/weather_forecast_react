import React from "react";
import { Forecast } from "./Forecast";

export function ThreeDaysForecast({ weather }) {
  console.log(weather);
  return (
    <div>
      <h2>ThreeDaysForecast</h2>
      <Forecast day_weather={weather.list[0]} />
      <Forecast day_weather={weather.list[1]} />
      <Forecast day_weather={weather.list[2]} />
    </div>
  );
}
