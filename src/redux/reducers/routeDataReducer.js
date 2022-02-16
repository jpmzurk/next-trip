const initialState = {
  routes: [],
  directions: [],
  stops: [],
};

const routes = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROUTES":
      return { ...state, routes: action.payload };
    case "SET_DIRECTIONS":
      return { ...state, directions: action.payload };
    case "SET_STOPS":
      return { ...state, stops: action.payload };
    default:
      return state;
  }
};

export default routes;
