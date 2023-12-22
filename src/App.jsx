import "./styles/styles.css";
import React, { useState } from "react";
import { Location } from "./components/Location";

export default function App() {
  return (
    <React.Fragment>
      <Location />
      <Location />
      <Location />
    </React.Fragment>
  );
}
