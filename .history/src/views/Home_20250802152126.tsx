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
        alignItems: "center",
        justifyContent: "flex-start",
        px: 20, // reduced padding to pull content toward center
        position: "relative",
        overflow: "hidden",
        gap: 6, // adds spacing between intro and image while keeping them grouped
      }}
    >
      <Fireflies />

      <Box sx={{ width: "50%" }}>
        <Intro />
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start", // aligns image with top of text block
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
              width: 140,
              height: 140,
              borderRadius: "50%",
              border: "4px solid",
              borderColor: "accent.main",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
