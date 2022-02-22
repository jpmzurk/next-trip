# Project Name

NexTrip Clone

## Application & test setup

This web application is built with React & Node & Material UI.  To run the project first install node modules with npm or yarn.  A proxy server is used to make calls to the API, so running a server is necessary.  Scripts to run the server and client are: 'npm run server' and 'npm run client'. 

The example unit tests were created with Jest and Enzyme, and are found in the TransitDepartures directory.  This component is the table of departures displayed when a user selects a stop. These test can be executed by running 'npm test <file-to-test>' or 'yarn test <file-to-test>'.  If you are used to using an extension like "Jest Run it", my apologies it will not work this enzyme adaptor and React 17. 

### Assumptions