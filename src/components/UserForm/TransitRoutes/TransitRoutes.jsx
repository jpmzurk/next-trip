import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { StyledSelect } from "../HelperComponents/StyledSelect";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import Loading from "../HelperComponents/Loading";

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
  }, [dispatch]);

  return (
    <>
      {routes.length ? (
        <>
          <Stack alignItems="center" spacing={{xs: 2}}>
            <FormControl sx={{width: { xs: '80%', sm: 570}}}>
              <InputLabel id="routesLabel">Route</InputLabel>
              <StyledSelect
                onChange={handleSelect}
                value={!route || !routeID ? routeID || "" : route}
                label="route"
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
          </Stack>
          {/* <Box sx={{
        '& .MuiTextField-root': { m: 1, width: '570px' },
      }}>
          
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={!route ? routeID || "" : route}
              onChange={handleSelect}
              helperText="Please select your route"
            >
              {routes.map(({ Route, Description }, i) => (
                <MenuItem key={i} value={Route}>
                  {Description}
                </MenuItem>
              ))}
            </TextField>
          </Box> */}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  routes: reduxState.routes,
  // directions: reduxState.directions,
});

export default connect(mapStateToProps)(TransitRoutes);
