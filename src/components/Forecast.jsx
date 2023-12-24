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

  // get a weather picture by weather id (OpenWeather)
  function getWeatherPic(weather_id) {
    // weather_img = "images/clear.png";
    if ((weather_id >= 200) & (weather_id < 300)) {
      return "images/thunderstorm.png"; //Thunderstorm
    } else if ((weather_id >= 300) & (weather_id < 400)) {
      return "images/drizzle.png"; // Drizzle
    } else if ((weather_id >= 500) & (weather_id < 600)) {
      return "images/rain.png"; // Rain
    } else if ((weather_id >= 600) & (weather_id < 700)) {
      return "images/snow.png"; // Snow
    } else if ((weather_id >= 700) & (weather_id < 800)) {
      return "images/atmosphere.png"; // Atmosphere
    } else if (weather_id == 800) {
      return "images/clear.png"; // Clear
    } else if ((weather_id >= 800) & (weather_id < 900)) {
      return "images/clouds.png"; // Clouds
    } else {
      return "";
    }
  }

  return (
    <div className="forecast">
      <div>{getMonDay(new Date(day_weather.dt * 1000))}</div>
      <img src={getWeatherPic(day_weather.weather[0].id)} />
      <p>{day_weather.weather[0].main}</p>
      <p>{parseInt(day_weather.temp.max - 273.15) + "℃"}</p>
      <p>{parseInt(day_weather.temp.min - 273.15) + "℃"}</p>
    </div>
  );
}
