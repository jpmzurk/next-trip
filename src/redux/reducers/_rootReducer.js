import { combineReducers } from 'redux';
import routeData from './routeDataReducer';

const rootReducer =  combineReducers({
    routeData,
})

export default rootReducer;