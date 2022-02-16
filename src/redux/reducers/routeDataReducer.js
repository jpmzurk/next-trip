const initialState = {
  routes: [],
  directions: [],
  stops: [],
  departures: [],
};

const routes = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROUTES":
      return { ...state, routes: action.payload };
    case "SET_DIRECTIONS":
      return { ...state, directions: action.payload };
    case "CLEAR_DIRECTIONS":
      return { ...state, directions: [] };
    case "SET_STOPS":
      return { ...state, stops: action.payload };
    case "CLEAR_STOPS":
      return { ...state, stops: [] };
    case "SET_DEPARTURES":
      return { ...state, departures: action.payload };
    case "CLEAR_DEPARTURES":
      return { ...state, departures: [] };
    default:
      return state;
  }
};

export default routes;
