import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getRoutes() {
  try {
    const response = yield axios.get("api/routes");
    yield put({ type: "SET_ROUTES", payload: response.data });
  } catch (error) {
    console.log("error in getRoutes");
  }
}

function* getDirections(action) {
  try {
    const id = action.payload;
    const response = yield axios.get(`api/directions/${id}`);
    yield put({ type: "SET_DIRECTIONS", payload: response.data });
  } catch (error) {
    console.log("error in get directions", error);
  }
}

function* getStops(action) {
  try {
    const {route, direction} = action.payload;
    const response = yield axios.get(`api/stops/${route}/${direction}`);
    yield put({ type: "SET_STOPS", payload: response.data });
  } catch (error) {
    console.log("error in get stops");
  }
}

function* getDepartures(action) {
  try {
    const {route, direction, stop} = action.payload;
    const response = yield axios.get(`api/departures/${route}/${direction}/${stop}`);
    yield put({ type: "SET_DEPARTURES", payload: response.data });
  } catch (error) {
    console.log("error in get departures");
  }
}

function* getRouteDataSaga() {
  yield takeLatest("FETCH_ROUTES", getRoutes);
  yield takeLatest("FETCH_DIRECTIONS", getDirections);
  yield takeLatest("FETCH_STOPS", getStops);
  yield takeLatest("FETCH_DEPARTURES", getDepartures);
}

export default getRouteDataSaga;
