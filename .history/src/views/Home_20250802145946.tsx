import React from "react";
import { Box } from "@mui/material";
import { Intro } from "../components/Intro";
import Fireflies from "../components/background/Fireflies";
import headshot from "../assets/headshot.jpg";

export const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        px: 4,
        position: "relative",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Fireflies />

      {/* grouped content container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* intro text */}
        <Box>
          <Intro />
        </Box>

        {/* headshot */}
        <Box
          component="img"
          src={headshot}
          alt="Doria Pertea"
          sx={{
            width: "50%"
            borderRadius: "50%",
            border: "3px solid",
            borderColor: "accent.main",
            animation: "fadeInRight 1s ease-out 1.2s forwards",
            opacity: 0,
            transform: "translateX(40px)",
            "@keyframes fadeInRight": {
              to: {
                opacity: 1,
                transform: "translateX(0)",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};
