import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material/";
import { connect } from "react-redux";
import TableRows from "./TableRows";

const DeparturesTable = ({ departures, stopID, dispatch }) => {
  const [isExpanded, setisExpanded] = useState(false);

  const handleExpand = () => {
    setisExpanded(() => !isExpanded);
  };

  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
      dispatch({ type: "CLEAR_DEPARTURES" });
      dispatch({ type: "CLEAR_STOPID" });
    };
  }, []);

  return (
    <>
      {stopID ? (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 500 }}
            stickyHeader
            aria-label="departures table"
          >
            <TableHead>
              <TableRow>
                <TableCell>{stopID.StopLabel}</TableCell>
                <TableCell></TableCell>
                <TableCell align="right">#{stopID.StopID}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Route</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell align="right">Departs</TableCell>
              </TableRow>
            </TableHead>
            {departures.length ? (
              <TableBody>
                {isExpanded ? (
                  <TableRows departures={departures} />
                ) : (
                  <TableRows departures={departures.slice(0, 2)} />
                )}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>There are no further departures at this stop today</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            )}
            <TableFooter>
              <TableRow>
                <TableCell>
                  <Button onClick={handleExpand}>Expand</Button>
                </TableCell>
              </TableRow>
            </TableFooter>
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
