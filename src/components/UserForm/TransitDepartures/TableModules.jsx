import React from "react";
import {
  TableRow,
  TableHead,
  TableFooter,
  TableBody,
  IconButton,
  CircularProgress,
  TableCell,
} from "@mui/material/";
import "../FadeIn.css";
import "./Departures.css";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

const headerStyles = {
  fontWeight: 700,
  color: "#626462",
  lineHeight: 1.1,
};
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
};

const DeparturesHeader = ({ __stopId }) => {
  return (
    <TableHead className="fadeIn">
      <TableRow>
        <TableCell
          sx={{ fontSize: "1.8rem", width: "80%", pl: 3, ...headerStyles }}
          colSpan={2}
        >
          {__stopId.StopLabel}
        </TableCell>
        <TableCell
          sx={{ fontSize: "1rem", pr: 3, ...headerStyles }}
          align="right"
        >
          <strong>Stop #</strong>: {__stopId.StopID}
        </TableCell>
      </TableRow>
      <TableRow className="tableSubheader">
        <TableCell sx={{ pl: 3, ...subHeaderStyles }}> Route </TableCell>
        <TableCell sx={{ ...subHeaderStyles }}>Destination</TableCell>
        <TableCell align="right" sx={{ pr: 3, ...subHeaderStyles }}>
          Departs
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

function DeparturesBody({ departures }) {
  return (
    <TableBody className="fadeIn">
      {departures.map((departure) => (
        <TableRow key={departure.DepartureTime}>
          <TableCell name="route" sx={{ pl: 3, ...bodyStyles }}>
            {departure.Route}
          </TableCell>
          <TableCell name="stop" sx={{ width: 500, ...bodyStyles }}>
            {departure.Description}
          </TableCell>
          <TableCell
            name="departures"
            sx={{ pr: 3, ...bodyStyles }}
            align="right"
          >
            {departure.DepartureText}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

const DeparturesFooter = ({ handleExpand, isExpanded }) => {
  return (
    <TableFooter className="fadeIn">
      <TableRow>
        <TableCell>
          <IconButton
            name="iconButton"
            aria-label="open or close"
            onClick={handleExpand}
          >
            {isExpanded ? (
              <>
                <RemoveCircleOutlineOutlinedIcon
                  aria-label="close"
                  name="collapse"
                  color="primary"
                />
              </>
            ) : (
              <>
                <AddCircleOutlineOutlinedIcon
                  aria-label="open"
                  name="expand"
                  color="primary"
                />
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
  DeparturesHeader,
  DeparturesBody,
  DeparturesFooter,
  NoDepartures,
  Loading,
};
