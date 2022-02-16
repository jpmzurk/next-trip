import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";

const DeparturesTable = ({ departures }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event, newPage) => {
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
          <Table sx={{ minWidth: 500 }} aria-label="departures table">
            <TableBody>
              {(departures.length
                ? departures.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : departures
              ).map((departure) => (
                <TableRow key={departure.DepartureTime}>
                  <TableCell component="th" scope="row">
                    {departure.Route}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
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
  departures: reduxState.routeData.departures,
});

export default connect(mapStateToProps)(DeparturesTable);
