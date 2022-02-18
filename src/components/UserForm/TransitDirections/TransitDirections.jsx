import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MenuItem, FormControl, InputLabel } from "@mui/material";
import {StyledSelect} from "../HelperComponents/StyledSelect";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import Loading from "../HelperComponents/Loading";
import '../Util.css';

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
    if (directionID) {
      setDirection(directionID);
      dispatch({
        type: "FETCH_STOPS",
        payload: { routeID, directionID },
      });
    } else setDirection("");
  }, [dispatch, routeID, directionID]);

  return (
    <>
      {directions.length ? (
        <>
          <FormControl className="fadeIn" sx={{width: { xs: '80%', sm: 400, md : 500}}}>
            <InputLabel id="directionsLabel">Directions</InputLabel>
            <StyledSelect
              onChange={handleSelect}
              value={!direction ? "" : direction}
              label="directions"
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
