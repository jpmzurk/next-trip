# Project

NexTrip

## Description

MetroTransit’s NexTrip application is a great tool for users to plan their trips around the Minneapolis / St. Paul metro area.  However, navigation within the application can be less than ideal. As it stands the native browser back and forward buttons do not work.  This is because segments of the route are not stored as separate routes in the SPA app and thereby browser history.  This project solves that issue exposing each selection a user makes a sub route as they are selected.  This way a user can easily navigate "backwards" and "forwards" using browser history.  This project was built very quickly and was a simple way to learn more about react router. 

### Application & Test Setup

This web application is built with React & Node & Material UI.  To run the project first install node modules with npm or yarn.  Scripts to run the server and client are: 'npm run server' and 'npm run client'. 

The example unit tests were created with Jest and Enzyme, and are found in the TransitDepartures directory.  This component is the table of departures displayed when a user selects a stop. These test can be executed by running 'npm test <file-to-test>' or 'yarn test <file-to-test>'.

### Assumptions

1.  I determined that React / Node / React Router would be sufficient to implement the project.  React and React Router provided an easy way to create an interactive user form with multiple nested child components / routes.  Specifically, React Routers Outlet API created a simple and effective way to match dynamic routes and child components. 

2. Local state management with url params would be the best fit with the application design.  Noticing the uni-directional flow of the user form, I opted to store user input data in local state and url params rather than global state.


#### Testing

There are a few example tests using the defunct enzyme package.  RTL would be a better choice.  This barebones test suite could be much improved if there were a basic test testing the assertion that params change as the user selects a viable option in a combo box. 
