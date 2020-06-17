const initialState = null;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS": {
      return action.payload;
    }
    default:
      return state;
  }
};
export default reducer;
