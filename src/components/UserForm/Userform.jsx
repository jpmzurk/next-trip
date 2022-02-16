import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import TransitRoutes from "./TransitRoutes/TransitRoutes";
import { connect } from "react-redux";
import Directions from "./Directions/Directions";

const Userform = ({ directions }) => {
  return (
    <>
      <Routes>
        <Route element={<TransitRoutes />} path="/" />
      </Routes>
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  directions: reduxState.routeData.directions,
});

export default connect(mapStateToProps)(Userform);
