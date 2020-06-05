import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import messageReducer from './messageReducer'

const rootReducer = combineReducers({
  articles: articleReducer,
  messages: messageReducer
})

export default rootReducer;
