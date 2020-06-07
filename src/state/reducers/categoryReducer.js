import initialState from "../store/initialState";

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    default:
      return state;
  }
};

export default categoryReducer;
