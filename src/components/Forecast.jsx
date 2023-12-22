import React from "react";

export function Forecast({ day_weather }) {
  // convert date imformation
  function getMonDay(date) {
    const months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jan",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };
    return months[date.getMonth()] + " " + date.getDate();
  }

  return (
    <div>
      <div>{getMonDay(new Date(day_weather.dt * 1000))}</div>
      <p>{day_weather.weather[0].main}</p>
      <p>{day_weather.weather[0].id}</p>
      <p>{parseInt(day_weather.temp.max - 273.15) + "℃"}</p>
      <p>{parseInt(day_weather.temp.min - 273.15) + "℃"}</p>
    </div>
  );
}
