import React, { useState, useEffect } from "react";
import { Table, TableContainer, Paper } from "@mui/material/";
import { connect } from "react-redux";
import {
  DeparturesHead,
  DeparturesBody,
  DeparturesFooter,
  NoDepartures,
  Loading,
} from "./TableModules";

const DeparturesTable = ({ departures, stopID, dispatch }) => {
  const [isExpanded, setisExpanded] = useState(false);

  const handleExpand = () => {
    setisExpanded(() => !isExpanded);
  };

  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR_DEPARTURES" });
      dispatch({ type: "CLEAR_STOPID" });
    };
  }, [dispatch]);

  return (
    <>
      {stopID ? (
        <TableContainer component={Paper} className="fadeIn">
          <Table sx={{ minWidth: 500 }} aria-label="departures table">
            <DeparturesHead stopID={stopID} />
            {departures.length ? (
              <>
                <DeparturesBody
                  departures={isExpanded ? departures : departures.slice(0, 2)}
                />
              </>
            ) : (
              <>{stopID.StopLabel ? <NoDepartures /> : <Loading />}</>
            )}
            <DeparturesFooter handleExpand={handleExpand} />
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
};
const mapStateToProps = (reduxState) => ({
  departures: reduxState.departuresData.departures,
  stopID: reduxState.departuresData.stopID,
});

export default connect(mapStateToProps)(DeparturesTable);
