import { all } from 'redux-saga/effects';
import routesSaga from './routesSaga'

export default function* rootSaga() {
    yield all ([
        routesSaga(),
    ])
}