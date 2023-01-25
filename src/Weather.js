import React, { useState } from "react";
import DateTime from "./DateTime";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.city);
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      image: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: new Date(response.data.dt * 1000),
    });

    setReady(true);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=702f59106bcb904df4e9eeb238089676&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
                onChange={handleCityChange}
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

        <h2>{weatherData.city}</h2>
        <ul>
          <li>
            <DateTime date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.image} alt={weatherData.description} />
            <span className="temp">{Math.round(weatherData.temperature)}</span>
            °C
          </div>
          <div className="col-6">
            <ul>
              <li>
                <strong>Humidity:</strong> {weatherData.humidity}%
              </li>
              <li>
                <strong>Wind:</strong> {Math.round(weatherData.wind)}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
