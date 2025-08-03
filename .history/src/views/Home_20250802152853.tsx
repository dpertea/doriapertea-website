import React from "react";
import { Grid, Box } from "@mui/material";
import { Intro } from "../components/Intro";
import Fireflies from "../components/background/Fireflies";
import headshot from "../assets/headshot.jpg";

export const Home: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        px: 4,
        py: 8,
      }}
    >
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12} md={10}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: 4,
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
                borderColor: "accent.main",
                objectFit: "cover",
                flexShrink: 0,
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
        </Grid>
      </Grid>
    </Box>
  );
};
