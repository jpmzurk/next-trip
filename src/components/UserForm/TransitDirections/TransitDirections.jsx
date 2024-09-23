import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import "../FadeIn.css";
import Loading from "../HelperComponents/Loading";
import { StyledSelect } from "../HelperComponents/StyledSelect";

const TransitDirections = ({ dispatch, directions }) => {
  const [direction, setDirection] = useState(null);
  const navigate = useNavigate();
  const { routeID, directionID } = useParams();

  const handleSelect = (e) => {
    const { value } = e.target;
    setDirection(value);

    if (value > -1) {
      navigate(`/${routeID}/${value}`);
    } else {
      dispatch({ type: "CLEAR_STOPS" });
      navigate("");
    }
  };

  useEffect(() => {
    setDirection("");
    dispatch({ type: "FETCH_DIRECTIONS", payload: routeID });
  }, [dispatch, routeID]);

  return (
    <>
      {directions.length ? (
        <>
          <FormControl
            className="fadeIn"
            sx={{ width: { xs: "80%", sm: 570 } }}
          >
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
              {directions.map(({ direction_id, direction_name }, i) => {
                return (
                  <MenuItem key={i} value={direction_id}>
                    {direction_name}
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
