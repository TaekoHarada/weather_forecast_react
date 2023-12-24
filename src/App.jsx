import "./styles/styles.css";
import React, { useState } from "react";
import { Location } from "./components/Location";

export default function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <div id="container">
        <Location />
        <Location />
        <Location />
      </div>
      <footer> Taeko Harada</footer>
    </React.Fragment>
  );
}
