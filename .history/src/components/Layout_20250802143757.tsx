import React from "react";
import { Outlet } from "react-router-dom";
import { FooterIcons } from "./footer/FooterIcons";
import { Navbar } from "./NavBar"; // optional, if you have one
import { Box } from "@mui/material";

export const Layout: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      minWidth="100vw"
    >
      <Navbar /> {/* optional */}
      <Box component="main" sx={{ flex: 1, display: "flex" }}>
        <Outlet />
      </Box>
      <FooterIcons />
    </Box>
  );
};
