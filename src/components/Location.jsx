// A Location container including 'search form' and '3 days weather forecast'

import React, { useState, useEffect } from "react";
import { SearchForecast } from "./SearchForecast";
import { ThreeDaysForecast } from "./ThreeDaysForecast";

export function Location() {
  const APIID = "431416ee6ac11ff008eca9e762cf30d3"; // Access key for OpenWeather
  const DEFAULT_CITY = "Calgary"; //later it will be determine from user's location

  const [city, setCity] = useState(DEFAULT_CITY);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true); //until fetching weather data, do not show weather information

  // fetch city imformation (OpenWeather) including the location by city name
  async function getCityData(city_name) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=1&appid=${APIID}`
      );
      // No error in response data
      if (response.ok) {
        // empty object
        if (Object.hasOwn(response)) {
          console.log("No data: ", Object.keys(response).length);
          throw new Error(Object.hasOwn(response));
        } else {
          const city_data = await response.json();

          return city_data;
        }
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  }

  //get weather data (OpenWeather) by the location(lat, lon)
  async function getWeatherData(lat, lon) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${APIID}`
      );
      // No error in response data
      if (response.ok) {
        const weather_data = await response.json();
        return weather_data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  }

  const onComponentMount = async () => {
    try {
      console.log("Component is mounted!");
      // fetch city imformation by city name
      const city_data = await getCityData(city);
      // convert the city name to the name in OpenWeather data
      setCity(city_data[0].name);
      // fetch weather imformation by city's location
      const weather_data = await getWeatherData(
        city_data[0].lat,
        city_data[0].lon
      );

      // Update the state with the fetched weather data
      setWeather(weather_data);
    } catch (error) {
      // Set the ci
      setCity("City is not found...");
      console.error("Error fetching data:", error);
      return error;
    } finally {
      // Set loading to false after fetching data
      setLoading(false);
    }
  };

  useEffect(() => {
    // Call the function when the component first mounts
    onComponentMount();
  }, []);

  if (loading) {
    return (
      <div className="location">
        <h2>{city}</h2>
        <SearchForecast city={city} setCity={setCity} />
        <div>Loading...</div>
      </div>
    );
  } else {
    return (
      <div className="location">
        <h2>{city}</h2>
        <SearchForecast
          city={city}
          setCity={setCity}
          onComponentMount={onComponentMount}
        />
        <ThreeDaysForecast weather={weather} />
      </div>
    );
  }
}
