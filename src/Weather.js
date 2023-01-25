import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-info w-100"
            />
          </div>
        </div>
      </form>

      <h2>London</h2>
      <ul>
        <li>Wednesday 09:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="mostly cloudy"
          />
          <span className="temp">6</span>°C
        </div>
        <div className="col-6">
          <ul>
            <li>
              <strong>Preciption:</strong> 15%
            </li>
            <li>
              <strong>Humidity:</strong> 10%
            </li>
            <li>
              <strong>Wind:</strong> 8 km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
