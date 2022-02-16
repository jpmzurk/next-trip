import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stops from "../Stops/Stops";

const StyledSelect = styled(Select)(({ theme }) => ({
  minWidth: 220,
  margin: "0 auto",
}));

const Direction = ({ dispatch, directions, route }) => {
  const [selectedDirection, setSelectedDirection] = useState("");

  const handleSelect = (e) => {
    setSelectedDirection(e.target.value);
    dispatch({
      type: "FETCH_STOPS",
      payload: { route: route, direction: e.target.value },
    });
  };

  useEffect(() => {
    setSelectedDirection("");
  }, [route]);

  return (
    <>
      <FormControl>
        {/* <InputLabel id="routesLabel">Directions</InputLabel> */}
        <StyledSelect
          onChange={handleSelect}
          value={selectedDirection}
          label="directions"
          labelId="directionsLabel"
          defaultValue=""
        >
          <MenuItem value={""}>
            <em>none</em>
          </MenuItem>
          {directions.map((direction, i) => {
            return (
              <MenuItem key={i} value={direction.Value}>
                {direction.Text}
              </MenuItem>
            );
          })}
        </StyledSelect>
      </FormControl>
      {selectedDirection.length ? (
        <Stops selectedDirection={selectedDirection} route={route} />
      ) : null}
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  directions: reduxState.routeData.directions,
});

export default connect(mapStateToProps)(Direction);
