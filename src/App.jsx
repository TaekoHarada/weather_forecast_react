import "./styles/styles.css";
import React, { useState } from "react";
import { Location } from "./components/Location";

export default function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Weather Forecast</h1>
        <div className="about">
          <a href="https://github.com/TaekoHarada/weather_forcast_react">
            Github - Weather Forecast (React)
          </a>
          Taeko Harada
        </div>
      </header>
      <div id="container">
        <Location />
        <Location />
        <Location />
      </div>
      <footer>
        <p className="about">
          Taeko Harada
          <a href="https://github.com/TaekoHarada/weather_forcast_react">
            Github - Weather Forecast (React)
          </a>
        </p>
      </footer>
    </React.Fragment>
  );
}
