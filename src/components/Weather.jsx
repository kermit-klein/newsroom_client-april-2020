import React, { useState } from "react";
import axios from "axios";
import "../modules/location";

const Weather = () => {
const [forecast, setForecast] = useState({});


  const getWeather = async () => {
    const secretKey = process.env.REACT_APP_OPEN_WEATHER_API_SECRET_KEY;
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&
exclude=minutely,hourly,daily&appid=${secretKey}`);
    return  temperature = response.current.temp
  };
useEffect(() => {
  getWeather
  return () => {
    cleanup
  }
}, [input])

  return <div>
  <p>Temperature: {temperature}</p>
  </div>;
};

export default Weather;
