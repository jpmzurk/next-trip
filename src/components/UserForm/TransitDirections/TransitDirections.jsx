import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MenuItem, FormControl, InputLabel } from "@mui/material";
import {StyledSelect} from "../HelperComponents/StyledSelect";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import Loading from "../HelperComponents/Loading";
import "../FadeIn.css";

const TransitDirections = ({ dispatch, directions }) => {
  const [direction, setDirection] = useState("");
  const navigate = useNavigate();
  const { routeID, directionID } = useParams();

  const handleSelect = (e) => {
    const { value } = e.target;
    setDirection(value);

    if (value) {
      navigate(value);
    } else {
      dispatch({ type: "CLEAR_STOPS" });
      navigate("");
    }
  };

  useEffect(() => {
    setDirection("")
    dispatch({ type: "FETCH_DIRECTIONS", payload: routeID });
  }, [dispatch, routeID]);

  return (
    <>
      {directions.length ? (
        <>
          <FormControl className="fadeIn" sx={{width: { xs: '80%', sm: 570}}}>
            <InputLabel id="directionsLabel">Direction</InputLabel>
            <StyledSelect
              aria-label="direction-dropdown"
              onChange={handleSelect}
              value={!direction ? directionID || "" : direction}
              label="direction"
              labelId="directionsLabel"
              name="directions"
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
          <Outlet />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  directions: reduxState.directions,
});

export default connect(mapStateToProps)(TransitDirections);
