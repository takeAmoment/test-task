import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
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
        <Typography variant="body1">Aliaksandra Piakhota</Typography>
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
        <Typography variant="body1">&#169; 2023</Typography>
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
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <ListItem sx={{ p: 0 }}>
            <ListItemButton component={Link} href="#" sx={{ p: 0 }}>
              <ListItemIcon
                sx={{
                  p: 0,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <TelegramIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemButton component={Link} href="#" sx={{ p: 0 }}>
              <ListItemIcon
                sx={{
                  p: 0,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <InstagramIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemButton
              component={Link}
              href="mailto:noone@.com"
              type="email"
              sx={{ p: 0 }}
            >
              <ListItemIcon
                sx={{
                  p: 0,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <EmailIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemButton
              component={Link}
              href="tel:+136745677554"
              sx={{ p: 0 }}
            >
              <ListItemIcon
                sx={{
                  p: 0,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <PhoneAndroidIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;
