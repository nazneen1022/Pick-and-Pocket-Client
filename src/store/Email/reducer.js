const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "SEND_EMAIL": {
      return action.payload;
    }
    default:
      return state;
  }
};
