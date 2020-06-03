import axios from 'axios'

const getPlace = async (dispatch) => {
  const addressData = navigator.geolocation.getCurrentPosition(async position => {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    const address = await translateLocation(long, lat)
    dispatch({
      type: "SET_LOCATION",
      payload: {
        country: address.data.results[0].components.country,
        city: address.data.results[0].components.city
      }
    })
  })
}

const translateLocation = async (long, lat) => {
  const apiKey = process.env.REACT_APP_OPEN_CAGE_API_KEY
  const address = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&language=en&key=${apiKey}`)
  return address;
}

export { getPlace };