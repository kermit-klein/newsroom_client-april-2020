import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import messageReducer from "./messageReducer";
import locationReducer from "./locationReducer";
import weatherReducer from './weatherReducer';
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  messages: messageReducer,
  location: locationReducer,
  weather: weatherReducer,
  category: categoryReducer,
});

export default rootReducer;
