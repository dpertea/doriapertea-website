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
      <Box sx={{ width: "60%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // aligns headshot and text vertically
            gap: 1, // space between headshot and text
          }}
        >
          <Intro />
          <Box
            component="img"
            src={headshot}
            alt="Doria Pertea"
            sx={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              border: "4px solid",
              borderColor: "accent.main",
              objectFit: "cover",
              flexShrink: 0, // prevents image from shrinking
              animation: "fadeInRight 1s ease-out 1s forwards",
              opacity: 0,
              transform: "translateX(200px)",
              "@keyframes fadeInRight": {
                to: {
                  opacity: 1,
                  transform: "translateX(0px)",
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
