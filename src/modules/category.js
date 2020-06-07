const getCategory = (category, dispatch) => {
  dispatch({
    type: "SET_CATEGORY",
    payload: { category: category },
  });
};

export default getCategory;
