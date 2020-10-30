const initialState = null;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS": {
      return action.payload;
    }
    case "ADD_POST": {
      if (!state) {
        return [action.payload];
      } else {
        return [...state, action.payload];
      }
    }
    default:
      return state;
  }
};
export default reducer;
