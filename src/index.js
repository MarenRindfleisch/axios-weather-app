import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <App />
    <footer>
      his project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/marenrindfleisch/"
        target="_blank"
        rel="noreferrer"
      >
        Maren Rindfleisch
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/MarenRindfleisch/axios-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced
      </a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
