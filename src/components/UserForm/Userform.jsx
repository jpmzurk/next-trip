import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import TransitDepartures from "./TransitDepartures/TransitDepartures";
import TransitDirections from "./TransitDirections/TransitDirections";
import TransitRoutes from "./TransitRoutes/TransitRoutes";
import TransitStops from "./TransitStops/TransitStops";

const Userform = () => {
  return (
    <>
      <Routes>
        <Route element={<TransitRoutes />} path="/">
          <Route element={<TransitDirections />} path="/:routeID">
            <Route element={<TransitStops />} path={":directionID"}>
              <Route element={<TransitDepartures />} path={":stopID"} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default connect()(Userform);
