import axios from 'axios';

const getWeather = (dispatch) => {
navigator.geolocation.getCurrentPosition(async (pos) => {
  try {
    const weather = await weatherApiCall(
      pos.coords.latitude,
      pos.coords.longitude
    );
    dispatch({
      type: "SET_WEATHER",
      payload: {
        temperature: weather.data.current.temp,
        description: weather.data.current.weather[0].description,
        iconUrl: weather.data.current.weather[0].icon
      },
    });
  } catch (error) {
    dispatch({
      type: "SET_WEATHER",
      payload: {
        temperature: null,
        description: null,
        iconUrl: null
      },
    });
    console.log(error);
  }
});
}

const weatherApiCall = async (lat, long) => {
  const secretKey = process.env.REACT_APP_OPEN_WEATHER_API_SECRET_KEY;
  let response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&
exclude=minutely,hourly,daily&appid=${secretKey}`);
  return response;
};

export { getWeather };