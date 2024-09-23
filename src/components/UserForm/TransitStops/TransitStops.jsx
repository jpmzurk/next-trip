import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import "../FadeIn.css";
import Loading from "../HelperComponents/Loading";
import { StyledSelect } from "../HelperComponents/StyledSelect";

const TransitStops = ({ dispatch, stops }) => {
  const [stop, setStop] = useState("");
  const navigate = useNavigate();
  const { routeID, directionID, stopID } = useParams();

  const handleSelect = (e) => {
    const { value } = e.target;
    setStop(value);
    if (value) {
      navigate(value);
    } else {
      dispatch({ type: "CLEAR_DEPARTURES" });
      navigate("");
    }
  };

  useEffect(() => {
    setStop("");
    dispatch({
      type: "FETCH_STOPS",
      payload: { routeID, directionID },
    });
    return () => {
      dispatch({ type: "CLEAR_STOPS" });
    };
  }, [dispatch, routeID, directionID]);

  return (
    <>
      {stops.length ? (
        <>
          <FormControl
            className="fadeIn"
            sx={{ width: { xs: "80%", sm: 570 } }}
          >
            <InputLabel id="stopsLabel">Stop</InputLabel>
            <StyledSelect
              onChange={handleSelect}
              value={!stop ? stopID || "" : stop}
              aria-label="stop-dropdown"
              label="stop"
              labelId="stopsLabel"
              defaultValue=""
              name="stops"
              sx={{ mb: 6 }}
            >
              <MenuItem value={""}>
                <em>Select Stop</em>
              </MenuItem>
              {stops.map((stop, i) => {
                return (
                  <MenuItem key={i} value={stop.place_code}>
                    {stop.description}
                  </MenuItem>
                );
              })}
            </StyledSelect>
          </FormControl>
          <Outlet />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  stops: reduxState.stops,
});

export default connect(mapStateToProps)(TransitStops);
