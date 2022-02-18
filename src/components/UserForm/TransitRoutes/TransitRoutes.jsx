import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Stack, MenuItem, FormControl } from "@mui/material";
import StyledSelect from "../HelperComponents/StyledSelect";
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
        </Stack>
      ) : <Loading/>}
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  routes: reduxState.routes,
  // directions: reduxState.directions,
});

export default connect(mapStateToProps)(TransitRoutes);
