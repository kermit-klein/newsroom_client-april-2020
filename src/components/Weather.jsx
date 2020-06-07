import React from "react";
import { useSelector } from "react-redux";

const Weather = () => {
  const weather = useSelector((state) => state.weather.weatherInfo);
  const city = useSelector((state) => state.location.city)

  return (
    <div id="widget">
      <h3>Current Weather for {city}</h3>
      <p>Temperature: {Math.round(weather.temperature)}°C</p>
      <br></br>
      <p>{weather.description}</p>
      <img src={`http://openweathermap.org/img/w/${weather.iconUrl}.png`} />
    </div>
  );
};

export default Weather;
