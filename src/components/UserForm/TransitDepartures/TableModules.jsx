import React from "react";
import {
  TableRow,
  TableHead,
  TableFooter,
  TableBody,
  IconButton,
  CircularProgress,
  TableCell
} from "@mui/material/";
import "../Util.css";
import "./Departures.css";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";


const headerStyles = {
  fontWeight: 700,
  color: "#626462",
  lineHeight: 1.1,
}
const subHeaderStyles = {
  fontWeight: 700,
  color: "#626462",
  fontSize: "1rem",
  letterSpacing: ".5px",
};

const bodyStyles = {
  color: "#626462",
  fontWeight: 500,
  fontSize: "1.2rem",
}


const DeparturesHead = ({ stopID }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{fontSize: '1.8rem', width: '80%', pl: 3, ...headerStyles}}colSpan={2}>{stopID.StopLabel}</TableCell>
        <TableCell sx={{fontSize: '1rem', pr: 3, ...headerStyles}}align="right">
          <strong>Stop #</strong>: {stopID.StopID}
        </TableCell>
      </TableRow>
      <TableRow className="tableSubheader">
        <TableCell sx={{pl: 3, ...subHeaderStyles}}> Route </TableCell>
        <TableCell sx={{...subHeaderStyles}}>Destination</TableCell>
        <TableCell align="right" sx={{pr: 3, ...subHeaderStyles}}>Departs</TableCell>
      </TableRow>
    </TableHead>
  );
};

function DeparturesBody({ departures }) {
  return (
    <TableBody className="fadeIn">
      {departures.map((departure) => (
        <TableRow key={departure.DepartureTime}>
          <TableCell sx={{pl: 3,  ...bodyStyles }}>{departure.Route}</TableCell>
          <TableCell sx={{ width: 500, ...bodyStyles }}>{departure.Description}</TableCell>
          <TableCell sx={{pr: 3, ...bodyStyles }} align="right">
            {departure.DepartureText}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

const DeparturesFooter = ({ handleExpand, isExpanded }) => {
  return (
    <TableFooter>
      <TableRow>
        <TableCell>
          <IconButton aria-label="open or close" onClick={handleExpand}>
            {isExpanded ? (
              <>
                <RemoveCircleOutlineOutlinedIcon color="primary" />
              </>
            ) : (
              <>
                <AddCircleOutlineOutlinedIcon color="primary" />
              </>
            )}
          </IconButton>
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
        <TableCell>There are no further departures at this time</TableCell>
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

export {
  DeparturesHead,
  DeparturesBody,
  DeparturesFooter,
  NoDepartures,
  Loading,
};
