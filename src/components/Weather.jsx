import React from "react";
import { useSelector } from "react-redux";


const Weather = () => {
  const weather = useSelector((state) => state.weather.weatherInfo);
  const city = useSelector((state) => state.location.city)
  const weatherRender = weather.temperature && (
    <div id="widget">
      <marquee> Current Weather for {city} &nbsp; &nbsp; Temperature: {Math.round(weather.temperature)}°C
      <img src={`http://openweathermap.org/img/w/${weather.iconUrl}.png`}/>{weather.description}</marquee>
    </div>
  )

  return ( 
    <>
    {weatherRender}
    </>
  );
};

export default Weather;
