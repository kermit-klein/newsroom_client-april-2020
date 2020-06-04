import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        country: action.payload.country,
        city: action.payload.city,
      };
    case "SIGNUP_MESSAGE":
      return {
        ...state,
        signupMessage: action.payload.signupMessage,
      };
    default:
      return state;
  }
};
export default rootReducer;
