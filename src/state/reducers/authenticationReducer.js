import initialState from "../store/initialState";

const authenticateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTHENTICATED":
      return {
        ...state,
        authenticated: action.payload.authenticated,
        subscriber: action.payload.role === "user" ? false : true,
        uid: action.payload.uid
      };
    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        subscriber: false,
        uid: ""
      }
    case "SET_SUBSCRIBERSTATUS":
      return {        
        ...state,
        subscriber: action.payload
      }
    default:
      return state;
  }
};

export default authenticateReducer;
