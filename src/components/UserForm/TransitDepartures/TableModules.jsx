import React from "react";
import {
  TableRow,
  TableCell,
  TableHead,
  TableFooter,
  TableBody,
  Button,
  CircularProgress,
} from "@mui/material/";
import '../Util.css';
import './Departures.css'

const DeparturesHead = ({ stopID }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={2}>{stopID.StopLabel}</TableCell>
        {/* <TableCell></TableCell> */}
        <TableCell align="right">Stop #: {stopID.StopID}</TableCell>
      </TableRow>
      <TableRow className="tableSubheader">
        <TableCell>Route</TableCell>
        <TableCell>Destination</TableCell>
        <TableCell align="right">Departs</TableCell>
      </TableRow>
    </TableHead>
  );
};

function DeparturesBody({ departures }) {
  return (
      <TableBody className="fadeIn">
        {departures.map((departure) => (
          <TableRow key={departure.DepartureTime}>
            <TableCell component="th" scope="row" style={{ width: 160 }}>
              {departure.Route}
            </TableCell>
            <TableCell style={{ width: 160 }}>
              {departure.Description}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              {departure.DepartureText}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
  );
}

const DeparturesFooter = ({ handleExpand }) => {
  return (
    <TableFooter>
      <TableRow>
        <TableCell>
          <Button onClick={handleExpand}>Expand</Button>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

const NoDepartures = () => {
  return (
    <TableBody className="fadeIn">
      <TableRow>
        <TableCell></TableCell>
        <TableCell>
          There are no further departures at this time
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableBody>
  );
};

const Loading = () => {
  return (
    <TableBody className="fadeIn">
      <TableRow>
        <TableCell></TableCell>
        <TableCell>
          <CircularProgress />
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableBody>
  );
};

export { DeparturesHead, DeparturesBody, DeparturesFooter, NoDepartures, Loading };
