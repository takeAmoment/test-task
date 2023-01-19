import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontFamily: "monospace",
              letterSpacing: "0.3em",
            }}
          >
            LOGO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
