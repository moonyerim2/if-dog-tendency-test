import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import styled from "@emotion/styled";

const ProgressBar = styled(LinearProgress)`
  .MuiLinearProgress-bar {
    background-color: #fa9d00;
  }
`;

function LinearDeterminate({ progress }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "700px",
        height: "15px",
        margin: "-100px 0 100px",
        backgroundColor: "red",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <ProgressBar
        variant="determinate"
        value={progress}
        sx={{
          height: "100%",
          backgroundColor: "#FFE9C5",
        }}
      />
    </Box>
  );
}

export default LinearDeterminate;
