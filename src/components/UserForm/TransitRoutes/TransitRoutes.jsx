import { FormControl, InputLabel, MenuItem, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Loading from "../HelperComponents/Loading";
import { StyledSelect } from "../HelperComponents/StyledSelect";

const TransitRoutes = ({ dispatch, routes }) => {
  const [route, setRoute] = useState("");
  const navigate = useNavigate();
  const { routeID } = useParams();

  const handleSelect = (e) => {
    const { value } = e.target;
    setRoute(value);
    if (value) {
      navigate(`/${value}`);
    } else {
      dispatch({ type: "CLEAR_DIRECTIONS" });
      navigate("");
    }
  };

  useEffect(() => {
    dispatch({ type: "FETCH_ROUTES" });
  }, [dispatch]);

  const noSelectedRoute = !route || !routeID;
  return (
    <>
      {routes.length ? (
        <>
          <Stack alignItems="center" spacing={{ xs: 2 }}>
            <FormControl sx={{ width: { xs: "80%", sm: 570 } }}>
              <InputLabel id="routesLabel">Route</InputLabel>
              <StyledSelect
                onChange={handleSelect}
                value={noSelectedRoute ? routeID || "" : route}
                label="route"
                labelId="routesLabel"
                name="route"
                aria-label="route-dropdown"
              >
                <MenuItem value={""}>
                  <em>Select Route</em>
                </MenuItem>
                {routes.map(({ route_id, route_label }, i) => {
                  return (
                    <MenuItem key={i} value={route_id}>
                      {route_label}
                    </MenuItem>
                  );
                })}
              </StyledSelect>
            </FormControl>

            <Outlet />
          </Stack>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  routes: reduxState.routes,
});

export default connect(mapStateToProps)(TransitRoutes);
