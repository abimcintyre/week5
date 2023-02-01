import React from "react";

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
        <img src={props.image} alt="Icon" />
      </div>
      <div className="WeatherForecast-temps">
        <span className="WeatherForecast-max">
          {Math.round(props.data.temp.max)}°C
        </span>{" "}
        <span className="WeatherForecast-min">
          {Math.round(props.data.temp.min)}°C
        </span>
      </div>
    </div>
  );
}
