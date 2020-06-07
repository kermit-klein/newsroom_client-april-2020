import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import messageReducer from './messageReducer';
import locationReducer from './locationReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
  messages: messageReducer,
  location: locationReducer,
  weather: weatherReducer
})

export default rootReducer;