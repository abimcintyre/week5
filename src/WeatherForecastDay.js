import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">
        <strong>{day()}</strong>
      </div>
      <div className="WeatherForecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="WeatherForecast-temps">
        <span className="WeatherForecast-max">
          {Math.round(props.data.temp.max)}
          <span className="celsius">°C</span>
        </span>{" "}
        <span className="WeatherForecast-min">
          {Math.round(props.data.temp.min)}°C
        </span>
      </div>
    </div>
  );
}
