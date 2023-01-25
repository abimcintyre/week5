import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This is an{" "}
          <a
            href="https://github.com/abimcintyre/week5"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>{" "}
          project coded by Abi McIntyre
        </footer>
      </div>
    </div>
  );
}
