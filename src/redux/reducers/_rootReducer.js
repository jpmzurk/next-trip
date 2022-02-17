import { combineReducers } from 'redux';
import routes from './routesReducer';
import directions from './directionsReducer';
import stops from './stopsReducer'
import departuresData from './departuresReducer';
import selectedRoute from './selectedRoute.reducer';

const rootReducer =  combineReducers({
    routes,
    directions,
    stops,
    departuresData,
    selectedRoute
})

export default rootReducer;