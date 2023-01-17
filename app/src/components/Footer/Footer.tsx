import { Grid, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";

const Footer = () => {
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "10vh", backgroundColor: "#d2e1fa" }}
    >
      <Grid
        container
        item
        xs={12}
        sm={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body1">author</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body1">All rules are protected</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        container
        direction="row"
        justifyContent="center"
        gap={2}
        alignItems="center"
      >
        <TelegramIcon />
        <InstagramIcon />
        <EmailIcon />
        <PhoneAndroidIcon />
      </Grid>
    </Grid>
  );
};

export default Footer;
