const directions = (state = [], action) => {
  switch (action.type) {
    case "SET_DIRECTIONS":
      return action.payload;
    case "CLEAR_DIRECTIONS":
      return [];
    default:
      return state;
  }
};

export default directions;
