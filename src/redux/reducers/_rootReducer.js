import { combineReducers } from 'redux';
import routes from './routesReducer';
import directions from './directionsReducer';
import stops from './stopsReducer'
import departuresData from './departuresReducer';

const rootReducer =  combineReducers({
    routes,
    directions,
    stops,
    departuresData,
})

export default rootReducer;