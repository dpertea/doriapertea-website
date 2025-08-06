import React from "react";
import "../App.css";
import { Box, Container, Typography } from "@mui/material";

//will import more (wip)
import projOneGif from "../assets/projects/kenwood.gif";
import projTwoGif from "../assets/projects/JobSat-SHORT.gif";
import projThreeGif from "../assets/projects/kenwood.gif";

interface Project {
  title: string;
  description: string;
  image: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      image: projOneGif,
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      image: projTwoGif,
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      image: projThreeGif,
    },
  ];

  return (
    <Container maxWidth="md" sx={{ my: 0 }}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        sx={{
          mb: 3,
          opacity: 0,
          animation: "slideDown 1s ease-out forwards",
          "@keyframes slideDown": {
            from: {
              transform: "translateY(-100px)",
              opacity: 0,
            },
            to: {
              transform: "translateY(0)",
              opacity: 1,
            },
          },
        }}
      >
        <Typography
          className="section-title"
          variant="h3"
          component="h2"
          sx={{ marginBottom: "4rem" }}
        >
          Projects
        </Typography>

        {projects.map((proj, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <Box
              key={proj.title}
              sx={{
                position: "relative",
                mb: 12,
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: isReversed ? "row-reverse" : "row",
                },
                alignItems: "center",
                gap: 4,
              }}
            >
              {/* geometric accent */}
              <Box
                sx={{
                  position: "absolute",
                  width: 180,
                  height: 180,
                  backgroundColor: "#fcd34d",
                  transform: "rotate(45deg)",
                  top: { xs: -20, md: -40 },
                  [isReversed ? "right" : "left"]: { xs: -20, md: -40 },
                  zIndex: -1,
                }}
              />

              {/* project image */}
              <Box
                component="img"
                src={proj.image}
                alt={proj.title}
                sx={{
                  width: { xs: "100%", md: "45%" },
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />

              {/* project text */}
              <Box sx={{ width: { xs: "100%", md: "55%" } }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  {proj.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {proj.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};
