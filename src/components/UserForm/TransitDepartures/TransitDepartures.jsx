import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material/";
import { connect } from "react-redux";
import TableRows from "./TableRows";

const DeparturesTable = ({ departures, stopID }) => {
  const [isExpanded, setisExpanded] = useState(false);

  const handleExpand = () => {
    setisExpanded(() => !isExpanded);
  };
  return (
    <>
      {departures.length ? (
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
            <TableBody>
              {isExpanded ? (
                <TableRows departures={departures} />
              ) : (
                <TableRows departures={departures.slice(0, 2)} />
              )}
            </TableBody>
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
