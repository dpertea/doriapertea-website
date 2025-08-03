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
              sx={{
                position: "relative",
                width: { xs: 120, sm: 180, md: 240 },
                height: { xs: 120, sm: 180, md: 240 },
                borderRadius: "50%",
                overflow: "visible",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "rgba(252, 211, 77, 0.6)", // matches accent color
                  filter: "blur(12px)",
                  zIndex: -1,
                },
              }}
            >
              <Box
                component="img"
                src={headshot}
                alt="Doria Pertea"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>

            <Intro />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
