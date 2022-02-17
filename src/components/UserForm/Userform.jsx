import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import TransitRoutes from "./TransitRoutes/TransitRoutes";
import TransitStops from "./TransitStops/TransitStops";
import TransitDirections from "./TransitDirections/TransitDirections";
import TransitDepartures from "./TransitDepartures/TransitDepartures";

const Userform = () => {
  return (
    <>
      <Routes>
        <Route element={<TransitRoutes />} path="/" >
          <Route element={<TransitDirections />} path="/:routeID"  >
            <Route element={<TransitStops />} path={"/:routeID/:directionID"}>
              <Route element={<TransitDepartures/>} path={"/:routeID/:directionID/:stopID"}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default connect()(Userform);
