# Project

NexTrip

## Description

MetroTransit’s NexTrip application is a great tool for users to plan their trips around the metro area.  However, navigation within the application is less than ideal. The user cannot use the browser back and forward buttons to toggle between each step of their route planning.  This project solves that issue by providing a workflow for the user to interact with the application however they choose. 


### Application & Test Setup

This web application is built with React & Node & Material UI.  To run the project first install node modules with npm or yarn.  Scripts to run the server and client are: 'npm run server' and 'npm run client'. 

The example unit tests were created with Jest and Enzyme, and are found in the TransitDepartures directory.  This component is the table of departures displayed when a user selects a stop. These test can be executed by running 'npm test <file-to-test>' or 'yarn test <file-to-test>'.

#### Assumptions

1.  I devised that React / Node would be a sufficient tech stack and React Router would be a good package to implement routing for the project.  React and React Router provided an easy way to create an interactive user form with multiple nested child components / routes.  Specifically, React Routers Outlet API created a simple and effective way to match dynamic routes and child components.  Node's abundant options for middleware and helper packages made creating a basic proxy server to make calls to the NexTrip API simple.

2. Local state management with url params would be the best fit with the application design.  Noticing the uni-directional flow of the user form, I opted to store user input data in local state and url params rather than global state (redux).   Managing user input globally in redux is often desirable, but only if data flow or component structure demands it.  Storing the selected state in the url params and mirroring that with component state proved to be simple and effective. 

3. Using sagas and reducers to store fetched data is a clean and effective way to manage data from external API calls. Individual files and functions within redux made developing and debugging very straightforward.  
