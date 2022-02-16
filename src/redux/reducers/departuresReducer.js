const initialState = {
  departures: [],
  stopID: {},
};

const departures = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DEPARTURES":
      return { ...state, departures: action.payload };
    case "CLEAR_DEPARTURES":
      return { ...state, departures: [] };
    case "SET_STOPID":
      return { ...state, stopID: action.payload };
    case "CLEAR_STOPID":
      return { ...state, stopID: {}};
    default:
      return state;
  }
};

export default departures;
