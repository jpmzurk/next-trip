import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Stack, MenuItem, FormControl, InputLabel } from "@mui/material";
import Directions from "../TransitDirections/TransitDirections";
import StyledSelect from "../StyledSelect/StyledSelect";

const TransitRoutes = ({ dispatch, routes, directions }) => {
  const [route, setRoute] = useState("");

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    setRoute(selectedValue);
    selectedValue
      ? dispatch({ type: "FETCH_DIRECTIONS", payload: selectedValue })
      : dispatch({ type: "CLEAR_DIRECTIONS" });
  };

  useEffect(() => {
    dispatch({ type: "FETCH_ROUTES" });
  }, []);

  return (
    <Stack>
      <FormControl fullWidth>
        {/* <InputLabel id="routesLabel">Routes</InputLabel> */}
        <StyledSelect
          onChange={handleSelect}
          value={route}
          label="routes"
          labelId="routesLabel"
        >
          <MenuItem value={""}>
            <em>Select Route</em>
          </MenuItem>
          {routes.map((route, i) => {
            return (
              <MenuItem key={i} value={route.Route}>
                {route.Description}
              </MenuItem>
            );
          })}
        </StyledSelect>
      </FormControl>
      {directions.length ? <Directions route={route} /> : null}
    </Stack>
  );
};

const mapStateToProps = (reduxState) => ({
  routes: reduxState.routes,
  directions: reduxState.directions,
});

export default connect(mapStateToProps)(TransitRoutes);
