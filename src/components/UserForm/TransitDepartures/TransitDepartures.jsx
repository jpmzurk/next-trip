import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Table from "./Table";

const TransitDepartures = ({ departures }) => {
  return (
    <>
      <h1>TransitDepartures Table</h1>
      <Table />
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  departures: reduxState.routeData.departures,
});

export default connect(mapStateToProps)(TransitDepartures);
