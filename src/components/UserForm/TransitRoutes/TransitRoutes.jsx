import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { Stack, Select, MenuItem, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSelect = styled(Select)(({ theme }) => ({
  minWidth: 220,
  margin: "0 auto",
}));

const TransitRoutes = ({ dispatch, routes }) => {
  const [route, setRoute] = useState("");
  const handleSelect = (e) => {
    {setRoute(e.target.value)}
  };

  useEffect(() => {
    dispatch({ type: "FETCH_ROUTES" });
  }, [dispatch]);


  return (
    <Stack>
      <h2>Routes</h2>
      <FormControl>
        <StyledSelect onChange={handleSelect} value={route}>
          <MenuItem value={""}>
            <em>none</em>
          </MenuItem>
          {routes.map((route, i) => {
            return (
              <MenuItem key={i} value={route.Description}>
                {route.Description}
              </MenuItem>
            );
          })}
        </StyledSelect>
      </FormControl>

    </Stack>
  );
};

const mapStateToProps = (reduxState) => ({
  routes: reduxState.routes,
});

export default connect(mapStateToProps)(TransitRoutes);
