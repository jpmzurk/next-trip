import { all } from 'redux-saga/effects';
import routesSaga from './routesSaga';
import directionsSaga from './directions.saga';
import stopsSaga from './stopsSaga';
import departuresSaga from './departuresSaga';

export default function* rootSaga() {
    yield all ([
        routesSaga(),
        directionsSaga(),
        stopsSaga(),
        departuresSaga()
    ])
}