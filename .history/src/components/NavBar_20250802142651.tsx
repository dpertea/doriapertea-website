import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  //Typography,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        {/* hamburger */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            display: { xs: "block", sm: "none" }, // show only on mobile (xs)
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* 
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <RouterLink
            to="/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Doria Pertea
          </RouterLink>
        </Typography>App title */}

        {/* Nav links */}
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            About
          </Button>
          <Button color="inherit" component={RouterLink} to="/">
            Projects
          </Button>
          <Button color="inherit" component={RouterLink} to="/resume">
            Resume
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
