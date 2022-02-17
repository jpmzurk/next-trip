const stops = (state = [], action) => {
  switch (action.type) {
    case "SET_STOPS":
      return action.payload;
    case "CLEAR_STOPS":
      return [];
    default:
      return state;
  }
};

export default stops;
