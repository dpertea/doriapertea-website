import React from "react";
import { Grid, Box } from "@mui/material";
import { Intro } from "../components/Intro";
import headshot from "../assets/headshot.jpg";

export const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
            {/* headshot comes first, and now slides in from the left */}
            <Box
              component="img"
              src={headshot}
              alt="Doria Pertea"
              sx={{
                width: { xs: 120, sm: 180, md: 240 },
                height: "auto",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 0 50px rgba(0, 0, 0, 0.4)", // soft yellow shadow
                flexShrink: 0,
                animation: "fadeInLeft 1s ease-out 1s forwards",
                opacity: 0,
                transform: "translateX(-200px)",
                "@keyframes fadeInLeft": {
                  to: {
                    opacity: 1,
                    transform: "translateX(0px)",
                  },
                },
              }}
            />

            <Intro />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
