import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecast-day">
        <strong>{props.data.dt}</strong>
      </div>
      <div className="WeatherForecast-icon">
        <img src={props.image} alt="Icon" />
      </div>
      <div className="WeatherForecast-temps">
        <span className="WeatherForecast-max">
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        <span className="WeatherForecast-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
