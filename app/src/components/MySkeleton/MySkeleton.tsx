import { Box, Skeleton } from "@mui/material";
import React from "react";

const MySkeleton = () => {
  return (
    <Box sx={{ width: { xs: "90%", sm: "60%" } }}>
      <Skeleton height={60} />
      <Skeleton height={30} />
      <Skeleton height={30} />
    </Box>
  );
};

export default MySkeleton;
