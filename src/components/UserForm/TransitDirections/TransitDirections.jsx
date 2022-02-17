import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MenuItem, FormControl } from "@mui/material";
import StyledSelect from "../StyledSelect/StyledSelect";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const TransitDirections = ({ dispatch, directions }) => {
  const [direction, setDirection] = useState("");
  const navigate = useNavigate();
  const { routeID, directionID } = useParams();

  const handleSelect = (e) => {
    const { value } = e.target;
    setDirection(value);

    if (value) {
      dispatch({
        type: "FETCH_STOPS",
        payload: { routeID, directionID: value },
      });
      navigate(value);
    } else {
      dispatch({ type: "CLEAR_STOPS" });
      navigate("/");
    }
  };

  //get data if refreshed
  useEffect(() => {
    routeID && dispatch({ type: "FETCH_DIRECTIONS", payload: routeID });
  }, [dispatch]);

  //useEffect for params changing user backward / forward
  useEffect(() => {
    if (directionID !== undefined) {
      setDirection(directionID);
      dispatch({
        type: "FETCH_STOPS",
        payload: { routeID, directionID },
      });
    } else setDirection("")
  }, [dispatch, routeID, directionID]);

  return (
    <>
      {directions.length ? (
        <>
          <FormControl>
            {/* <InputLabel id="routesLabel">Directions</InputLabel> */}
            <StyledSelect
              onChange={handleSelect}
              value={!direction ? "" : direction}
              label="directions"
              labelId="directionsLabel"
              defaultValue=""
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
      ) : <Box sx={{textAlign: 'center'}}><CircularProgress /> </Box>}
    </>
  );
};

const mapStateToProps = (reduxState) => ({
  directions: reduxState.directions,
});

export default connect(mapStateToProps)(TransitDirections);
