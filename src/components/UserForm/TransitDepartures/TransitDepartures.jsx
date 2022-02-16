import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from '@mui/material/TableHead';
import Paper from "@mui/material/Paper";

import { connect } from "react-redux";

const DeparturesTable = ({ departures, stopID }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {departures.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} stickyHeader aria-label="departures table">
            <TableHead>
              <TableRow>
                <TableCell >{stopID.StopLabel}</TableCell>
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
              {(departures.length
                ? departures.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : departures
              ).map((departure) => (
                <TableRow key={departure.DepartureTime}>
                  <TableCell component="th" scope="row" style={{ width: 160 }}>
                    {departure.Route}
                  </TableCell>
                  <TableCell style={{ width: 160 }} >
                    {departure.Description}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {departure.DepartureText}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[3, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={departures.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
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
