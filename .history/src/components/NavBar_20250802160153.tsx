import React from "react";
import { AppBar, Box, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

export const Navbar: React.FC = () => {
  const location = useLocation();

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
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            display: { xs: "block", sm: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box>
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;

            return (
              <Button
                key={label}
                component={RouterLink}
                to={path}
                sx={{
                  color: "inherit",
                  textDecoration: isActive ? "underline" : "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
