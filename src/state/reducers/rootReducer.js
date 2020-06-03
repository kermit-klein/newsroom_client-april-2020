import initialState from '../store/initialState';

const rootReducer = (state = initialState, action) => {
  if (action.type === "SET_ACTIVE_ARTICLE") {
		return {
			...state,
			activeArticle: action.payload
    }
  }

  return state;
};

export default rootReducer;
