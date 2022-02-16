import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import TransitRoutes from "./TransitRoutes/TransitRoutes";
import { connect } from "react-redux";

const Userform = () => {
  return (
    <>
      <Routes>
        <Route element={<TransitRoutes />} path="/" />
      </Routes>
    </>
  );
};



export default connect()(Userform);
