const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const routesRouter = require('./routes/routes.router');
const directionsRouter = require('./routes/directions.router');
const stopsRouter = require('./routes/stops.router');
const departureRouter = require('./routes/departures.router');

/* Middleware */
//Apply cors to conform with external api
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes //
app.use('/api/routes', routesRouter)
app.use('/api/directions', directionsRouter)
app.use('/api/stops', stopsRouter)
app.use('/api/departures', departureRouter)

//listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
