const setCategory = (category, dispatch) => {
  dispatch({
    type: "SET_CATEGORY",
    payload: {
      category: category
    }
  })
}

export { setCategory }