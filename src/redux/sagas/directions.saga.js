import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getDirections(action) {
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  try {
    const response = yield axios.get(
      `api/directions/${action.payload}`,
      config
    );
    yield put({ type: "SET_DIRECTIONS", payload: response.data });
  } catch (error) {
    console.log("error in get directions", error);
  }
}
function* directionsSaga() {
  yield takeLatest("FETCH_DIRECTIONS", getDirections);
}

export default directionsSaga;
