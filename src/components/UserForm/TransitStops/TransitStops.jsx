import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MenuItem, FormControl, InputLabel } from "@mui/material";
import StyledSelect from "../StyledSelect/StyledSelect";
import TransitDepartures from "../TransitDepartures/TransitDepartures";

const TransitStops = ({ dispatch, stops, direction, route }) => {
 const [stop, setStop] = useState("")

  const handleSelect = (e) => {
    const selectedValue = e.target.value
    setStop(selectedValue);

    selectedValue ?
    dispatch({
      type: "FETCH_DEPARTURES",
      payload: { route, direction, stop: selectedValue},
    }) : dispatch({type: 'CLEAR_DEPARTURES'})
  };

  useEffect(() => {
    setStop("");
  }, [direction])
  
  return (
    <>
    <FormControl>
        {/* <InputLabel id="routesLabel">Directions</InputLabel> */}
        <StyledSelect
          onChange={handleSelect}
          value={stop}
          label="stops"
          labelId="stopsLabel"
          defaultValue=""
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
      {stop.length ? (
        <TransitDepartures stop={stop} />
      ) : null}
    </>
  )
}

const mapStateToProps = (reduxState) => ({
  stops: reduxState.stops
})


export default connect(mapStateToProps)(TransitStops)