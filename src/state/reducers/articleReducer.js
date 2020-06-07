import initialState from "../store/initialState";

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_ARTICLE":
      return {
        ...state,
        activeArticle: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload.category
      }
    default:
      return state;
  }
};
export default articleReducer;
