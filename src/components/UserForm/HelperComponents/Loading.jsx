import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box name="loading" sx={{ textAlign: "center" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
