import initialState from "../store/initialState";

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        country: action.payload.country,
        city: action.payload.city,
      };
    default:
      return state;
  }
};

export default locationReducer;
