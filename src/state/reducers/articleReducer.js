import initialState from "../store/initialState";

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_ARTICLE":
      return {
        ...state,
        activeArticle: action.payload,
      };
    default:
      return state;
  }
};
export default articleReducer;
