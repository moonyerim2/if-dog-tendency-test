import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function LinearDeterminate({ progress }) {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

export default LinearDeterminate;
