import { all } from 'redux-saga/effects';
import routeDataSaga from './routeDataSaga'

export default function* rootSaga() {
    yield all ([
        routeDataSaga()
    ])
}