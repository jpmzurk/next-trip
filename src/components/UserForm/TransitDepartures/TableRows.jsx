import React from "react";
import { TableRow, TableCell } from "@mui/material/";

function TableRows({ departures }) {
  return (
    <>
   { departures.map(departure =>
      <TableRow key={departure.DepartureTime}>
        <TableCell component="th" scope="row" style={{ width: 160 }}>
          {departure.Route}
        </TableCell>
        <TableCell style={{ width: 160 }}>{departure.Description}</TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {departure.DepartureText}
        </TableCell>
      </TableRow>)}
    </>
  );
}

export default TableRows;
