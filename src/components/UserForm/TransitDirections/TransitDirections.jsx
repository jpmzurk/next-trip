import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MenuItem, FormControl, InputLabel } from "@mui/material";
import TransitStops from "../TransitStops/TransitStops";
import StyledSelect from "../StyledSelect/StyledSelect";

const TransitDirections = ({ dispatch, directions, route }) => {
  const [direction, setDirection] = useState("");

  const handleSelect = (e) => {
    const selectedDirection = e.target.value;
    setDirection(selectedDirection);
    selectedDirection
      ? dispatch({
          type: "FETCH_STOPS",
          payload: { route, direction: selectedDirection },
        })
      : dispatch({ type: "CLEAR_STOPS" });
  };

  useEffect(() => {
    setDirection("");
  }, [route]);

  return (
    <>
      <FormControl>
        {/* <InputLabel id="routesLabel">Directions</InputLabel> */}
        <StyledSelect
          onChange={handleSelect}
          value={direction}
          label="directions"
          labelId="directionsLabel"
          defaultValue=""
        >
          <MenuItem value={""}>
            <em>Select Direction</em>
          </MenuItem>
          {directions.map((__direction, i) => {
            return (
              <MenuItem key={i} value={__direction.Value}>
                {__direction.Text}
              </MenuItem>
            );
          })}
        </StyledSelect>
      </FormControl>
      {direction.length ? (
        <TransitStops direction={direction} route={route} />
      ) : null}
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  directions: reduxState.routeData.directions,
});

export default connect(mapStateToProps)(TransitDirections);
