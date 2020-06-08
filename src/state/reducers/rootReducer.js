import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import messageReducer from "./messageReducer";
import locationReducer from "./locationReducer";
import weatherReducer from './weatherReducer';
import categoryReducer from "./categoryReducer";
import authenticationReducer from './authenticationReducer'

const rootReducer = combineReducers({
  articles: articleReducer,
  messages: messageReducer,
  location: locationReducer,
  weather: weatherReducer,
  category: categoryReducer,
  auth: authenticationReducer,
});

export default rootReducer;
