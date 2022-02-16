import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* getRoutes() {
    try {
        const config = {
            headers : {'Content-type' : 'application/json'}
        }

        const response = yield axios.get('api/routes', config);
        yield put ({type: 'SET_ROUTES', payload: response.data})

    } catch (error) {
        console.log('error in getRoutes');
    }
}

function* getRoutesSaga () {
    yield takeLatest('FETCH_ROUTES', getRoutes)
}

export default getRoutesSaga