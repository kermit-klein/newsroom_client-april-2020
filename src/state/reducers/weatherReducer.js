import initialState from "../store/initialState";

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        weatherInfo: {
          temperature: action.payload.temperature,
          description: action.payload.description,
          iconUrl: action.payload.iconUrl,
        },
      };
    default:
      return state;
  }
};

export default weatherReducer;
