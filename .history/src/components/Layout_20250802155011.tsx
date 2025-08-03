import { React, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FooterIcons } from "./footer/FooterIcons";
import { Navbar } from "./NavBar"; // optional, if you have one
import { Box } from "@mui/material";
import Fireflies from "./background/Fireflies";

export const Layout: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      minWidth="100vw"
    >
      <Navbar /> {/* optional */}
      <Fireflies />
      <Box component="main" sx={{ flex: 1, display: "flex" }}>
        <Outlet />
      </Box>
      <FooterIcons />
    </Box>
  );
};
