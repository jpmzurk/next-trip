import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Directions from '../Directions/Directions'
const StyledSelect = styled(Select)(({ theme }) => ({
  minWidth: 220,
  margin: "0 auto",
}));

const TransitRoutes = ({ dispatch, routes, directions }) => {
  const [route, setRoute] = useState("");

  const handleSelect  = (e) => {
    setRoute(e.target.value);
    dispatch({type: 'FETCH_DIRECTIONS', payload: e.target.value})
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
            <em>none</em>
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
      {
        directions.length ?  
        <Directions route={route}/>
        : null
      }
    </Stack>
  );
};

const mapStateToProps = (reduxState) => ({
  routes: reduxState.routeData.routes,
  directions: reduxState.routeData.directions,
});

export default connect(mapStateToProps)(TransitRoutes);
