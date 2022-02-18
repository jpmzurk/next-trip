import React, { useState, useEffect } from "react";
import { Table } from "@mui/material/";
import { connect } from "react-redux";
import {
  DeparturesHead,
  DeparturesBody,
  DeparturesFooter,
  NoDepartures,
  Loading,
} from "./TableModules";
import { useNavigate, useParams } from "react-router-dom";

const DeparturesTable = ({ departures, stopId, dispatch }) => {
  const [isExpanded, setisExpanded] = useState(false);
  const { routeID, directionID, stopID } = useParams();

  const handleExpand = () => {
    setisExpanded(() => !isExpanded);
  };

  console.log('stopId', stopId);
  useEffect(() => {
    if (stopId !== stopID){
      dispatch({
        type: "FETCH_DEPARTURES",
        payload: { routeID, directionID, stopID },
      });
    }
    return () => {
      if (!stopID) {
      dispatch({ type: "CLEAR_DEPARTURES" });
      dispatch({ type: "CLEAR_STOPID" });}
    };
  }, [dispatch]);

  return (
    <>
      {stopId ? (
        <Table aria-label="departures table" sx={{width: ['80%', 660, 770, 1140], bgcolor: '#f5f5f4', mt: 6}}>
          <DeparturesHead stopID={stopId} />
          {departures.length ? (
            <>
              <DeparturesBody
                departures={isExpanded ? departures : departures.slice(0, 3)}
              />
            </>
          ) : (
            <>{stopID.StopLabel ? <NoDepartures /> : <Loading />}</>
          )}
          <DeparturesFooter handleExpand={handleExpand} />
        </Table>
      ) : null}
    </>
  );
};
const mapStateToProps = (reduxState) => ({
  departures: reduxState.departuresData.departures,
  stopId: reduxState.departuresData.stopID,
});

export default connect(mapStateToProps)(DeparturesTable);
