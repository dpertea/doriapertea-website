import React from "react";
import { Box, Container } from "@mui/material";
import { Intro } from "../components/Intro";
import Fireflies from "../components/background/Fireflies";
import headshot from "../assets/headshot.jpg";

export const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center", // vertical centering within remaining layout space
        justifyContent: "center", // align content to left
        px: 30, // horizontal padding
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Fireflies />

      <Box sx={{ width: "50%" }}>
        <Intro />
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "fadeInRight 1s ease-out 1s forwards",
          opacity: 0,
          transform: "translateX(50px)",
          "@keyframes fadeInRight": {
            to: {
              opacity: 1,
              transform: "translateX(0px)",
            },
          },
        }}
      >
        <Box
          component="img"
          src={headshot}
          alt="Doria Pertea"
          sx={{
            width: "50%",
            borderRadius: "50%",
            /*border: "4px solid",*/
            borderColor: "accent.main", // uses your theme's accent color
          }}
        />
      </Box>
    </Box>
  );
};
