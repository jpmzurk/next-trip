import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Stack, MenuItem, FormControl } from "@mui/material";
import StyledSelect from "../StyledSelect/StyledSelect";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const TransitRoutes = ({ dispatch, routes }) => {
  const [route, setRoute] = useState("");
  const navigate = useNavigate();
  const { routeID } = useParams();
  
  const handleSelect = (e) => {
    const { value } = e?.target;
    setRoute(value);
    if (value) {
      dispatch({ type: "FETCH_DIRECTIONS", payload: value });
      navigate(`/${value}`);
    } else {
      dispatch({ type: "CLEAR_DIRECTIONS" });
      navigate("/");
    }
  };

  useEffect(() => {
    dispatch({ type: "FETCH_ROUTES" });
  }, []);

  return (
    <>
      {routes.length ? (
        <Stack>
          <FormControl fullWidth>
            {/* <InputLabel id="routesLabel">Routes</InputLabel> */}
            <StyledSelect
              onChange={handleSelect}
              value={!route || !routeID ? routeID || "" : route}
              label="routes"
              labelId="routesLabel"
              name="route"
            >
              <MenuItem value={""}>
                <em>Select Route</em>
              </MenuItem>
              {routes.map(({ Route, Description }, i) => {
                return (
                  <MenuItem key={i} value={Route}>
                    {Description}
                  </MenuItem>
                );
              })}
            </StyledSelect>
          </FormControl>
          <Outlet />
          {/* {directions.length ? <Directions route={route} /> : null} */}
        </Stack>
      ) : <Box sx={{textAlign: 'center'}}><CircularProgress /> </Box>}
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  routes: reduxState.routes,
  // directions: reduxState.directions,
});

export default connect(mapStateToProps)(TransitRoutes);
