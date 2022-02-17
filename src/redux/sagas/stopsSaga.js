import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getStops(action) {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { routeID, directionID } = action.payload;
      const response = yield axios.get(`/api/stops/${routeID}/${directionID}`, config);
  
      yield put({ type: "SET_STOPS", payload: response.data });
    } catch (error) {
      console.log("error in get stops");
    }
  }

function* stopsSaga() {
    yield takeLatest("FETCH_STOPS", getStops);
}

export default stopsSaga;
