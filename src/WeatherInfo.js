import React from "react";
import DateTime from "./DateTime";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          <DateTime date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span className="float-left">
            <WeatherIcon code={props.data.icon} size={45} />
          </span>

          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>
              <strong>Humidity:</strong> {props.data.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {Math.round(props.data.wind)}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
