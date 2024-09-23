import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

import rootReducer from "./redux/reducers/_rootReducer";
import rootSaga from "./redux/sagas/_root.saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
