import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import messageReducer from "./messageReducer";
import locationReducer from "./locationReducer";
import categoryReducer from "./categoryReducer";
import authenticationReducer from './authenticationReducer'

const rootReducer = combineReducers({
  articles: articleReducer,
  messages: messageReducer,
  location: locationReducer,
  category: categoryReducer,
  auth: authenticationReducer,
});

export default rootReducer;
