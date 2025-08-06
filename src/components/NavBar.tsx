import React from "react";
import { AppBar, Box, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "projects" },
  { label: "Resume", path: "resume" },
  { label: "Contact", path: "contact" },
];

export const Navbar: React.FC<{ show: boolean }> = ({
  show,
}: {
  show: boolean;
}) => {
  if (!show) return null;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 5000,
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
                onClick={() => scrollToSection("projects")}
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
