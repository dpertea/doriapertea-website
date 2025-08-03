import React from "react";
import { Box, Container } from "@mui/material";
import { Intro } from "../components/Intro";
import Fireflies from "../components/background/Fireflies";

export const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center", // vertical centering within remaining layout space
        justifyContent: "flex-start", // align content to left
        px: 4, // horizontal padding
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Fireflies />

      <Box sx={{ width: "50%" }}>
        <Intro />
      </Box>
    </Box>
  );
};
