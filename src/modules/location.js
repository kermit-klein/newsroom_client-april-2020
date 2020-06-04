import axios from "axios";

const getPlace = (dispatch) => {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    try {
      const address = await translateLocation(
        pos.coords.longitude,
        pos.coords.latitude
      );
      dispatch({
        type: "SET_LOCATION",
        payload: {
          country: address.data.results[0].components.country,
          city: address.data.results[0].components.city,
        },
      });
    } catch (error) {
      dispatch({
        type: "SET_LOCATION",
        payload: {
          country: "",
          city: "",
        },
      });
      console.log(error);
    }
  });
};

const translateLocation = async (long, lat) => {
  const apiKey = process.env.REACT_APP_OPEN_CAGE_API_KEY;
  const address = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C${long}&language=en&key=${apiKey}`
  );
  return address;
};

export { getPlace };
