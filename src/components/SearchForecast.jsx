// Component for a search form
// which search 3 days weather forecast by a location entered in the text box

import React from "react";

export function SearchForecast({ city, setCity }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Event !!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search_form">SearchForecast</div>
      <label htmlFor="search_box">Location</label>
      <input
        id="search_box"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="search_btn">
        Go
      </button>
    </form>
  );
}
