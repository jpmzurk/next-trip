const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const transitRoutes = require('./routes/transitRoutes.router')

/* Middleware */
//Apply cors to conform with external api / set headers
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes //
app.use('/api/routes', transitRoutes)

//listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
