import React from "react";
import { useSelector } from "react-redux";

const Weather = () => {
  const weather = useSelector((state) => state.weather.weatherInfo);

  return (
    <div id="widget">
      <h3>Current Weather</h3>
      <p>Temperature: {Math.round(weather.temperature)}</p>
      <br></br>
      <p>{weather.description}</p>
      <div>{`http://openweathermap.org/img/w/"${weather.iconUrl}".png`}</div>
    </div>
  );
};

export default Weather;
