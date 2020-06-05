import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import messageReducer from './messageReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
  messages: messageReducer,
  location: locationReducer
})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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