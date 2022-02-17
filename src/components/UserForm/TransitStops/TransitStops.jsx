import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MenuItem, FormControl } from "@mui/material";
import StyledSelect from "../StyledSelect/StyledSelect";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const TransitStops = ({ dispatch, stops }) => {
  const [stop, setStop] = useState("");
  const navigate = useNavigate();
  const { routeID, directionID, stopID } = useParams();

  const handleSelect = (e) => {
    const { value } = e?.target;
    setStop(value);

    if (value) {
      console.log("handle select payload stopID: ", value);
      dispatch({
        type: "FETCH_DEPARTURES",
        payload: { routeID, directionID, stopID: value },
      });
      navigate(value);
    } else {
      dispatch({ type: "CLEAR_DEPARTURES" });
      navigate("/");
    }
  };

  //useEffect for params changing user backward / forward
  useEffect(() => {
    if (stopID !== undefined && stopID !== stop) {
      console.log("stopID is: ", stopID);
      setStop(stopID);
      dispatch({
        type: "FETCH_DEPARTURES",
        payload: { routeID, directionID, stopID },
      });
    } else setStop("");
  }, [dispatch, routeID, directionID, stopID]);

  return (
    <>
      {stops.length ? (
        <>
          {" "}
          <FormControl>
            {/* <InputLabel id="routesLabel">Directions</InputLabel> */}
            <StyledSelect
              onChange={handleSelect}
              value={!stop ? stopID || "" : stop}
              label="stops"
              labelId="stopsLabel"
              defaultValue=""
              name="stops"
            >
              <MenuItem value={""}>
                <em>Select Stop</em>
              </MenuItem>
              {stops.map((stop, i) => {
                return (
                  <MenuItem key={i} value={stop.Value}>
                    {stop.Text}
                  </MenuItem>
                );
              })}
            </StyledSelect>
          </FormControl>
          <Outlet />
        </>
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress />{" "}
        </Box>
      )}
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  stops: reduxState.stops,
});

export default connect(mapStateToProps)(TransitStops);
