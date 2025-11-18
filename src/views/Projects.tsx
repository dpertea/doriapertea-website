import React, { useState } from "react";
import { Box, Container, Typography, styled } from "@mui/material";

import projOneGif from "../assets/projects/kenwood.gif";
import projTwoGif from "../assets/projects/JobSat-SHORT.gif";
import projThreeGif from "../assets/projects/the-guardian.gif";

import projOneStill from "../assets/projects/kenwood-still.jpg";
import projTwoStill from "../assets/projects/JobSat-still.jpg";
import projThreeStill from "../assets/projects/the-guardian-still.jpg";
import "../App.css";

interface Project {
  title: string;
  description: string;
  still: string;
  gif: string;
}

const projects: Project[] = [
  {
    title: "Kenwood Tavern",
    description:
      "A simple, responsive, single-page React landing page for a local Baltimore bar, built to highlight their atmosphere, hours, and specials. To help them grow a mailing list without ongoing costs, I integrated Firebase to handle email sign-ups and give them a lightweight, self-managed solution with zero subscription fees. The design is simple, mobile-friendly, and optimized for local discovery.",
    still: projOneStill,
    gif: projOneGif,
  },
  {
    title: "Job Satisfaction Report",
    description:
      "An interactive web dashboard for a Harvard University-led survey on workplace well-being developed in React with a Python FastAPI and PostgreSQL database. I developed the Auth0 authentication flow and participated in the full data pipeline to help clean and aggregate responses from thousands of employee surveys into our postgreSQL database and then performed complex queries and calculations in Python for integration with our frontend React App and its many data visualizations. The resulting site gives chief acedemic officers of institutions clear insights into key drivers of satisfaction and turns complex survey data into actionable recommendations for institutions.",
    still: projTwoStill,
    gif: projTwoGif,
  },
  {
    title: "The Guardian Newsreader",
    description:
      "A simple interface to interact with The Guardian's news API and easily search and access publications by date, edition, tag, and more. Built with React and Material UI, this was my first ever attempt at building a React App before discovering my passion for full stack development.",
    still: projThreeStill,
    gif: projThreeGif,
  },
];

// wrapper that handles hovers
const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  margin: theme.spacing(5), // margin: 40px if your spacing(1)=8px

  // base: full width, centered
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",

  // from small screens up:
  [theme.breakpoints.up("sm")]: {
    width: 350,
  },

  // from medium screens up:
  [theme.breakpoints.up("md")]: {
    width: "45%",
    marginLeft: 0,
    marginRight: 0,
  },

  "& .project-image": {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  "& .project-image:hover": {
    transform: "scale(1.05)",
    boxShadow: "1px 1px 10px 2px #646cff",
  },
  "& .project-image:hover + .accent": {
    transform: "translate(0, 0) rotate(0deg) scale(1.15)",
    width: "100%",
    height: "100%",
  },
}));

export const Projects: React.FC = () => (
  <Container maxWidth="lg" sx={{ py: 8, position: "relative", zIndex: 1 }}>
    <Typography
      variant="h3"
      align="center"
      gutterBottom
      sx={{ fontWeight: 700, mb: 2 }}
      className="section-title"
    >
      Projects
    </Typography>
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontStyle: "italic" }}
      >
        <span style={{ color: "#fcd34d" }}>*** </span>This site is actively
        under construction. More refinements and project samples coming soon…
        <span style={{ color: "#fcd34d" }}>*** </span>
      </Typography>
    </Box>

    {projects.map((proj, idx) => {
      const isReversed = idx % 2 === 1;

      return (
        <Box
          key={proj.title}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: isReversed ? "row-reverse" : "row",
            },
            alignItems: "center",
            gap: { xs: 4, md: 12 },

            // on xs, center content horizontally
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          <ImageWrapper sx={{ width: { xs: "100%", sm: 350, md: "45%" } }}>
            {/* project image/GIF */}
            <HoverSwapImage still={proj.still} gif={proj.gif} />

            {/* geometric accent */}
            <Box
              className="accent"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 180,
                height: 180,
                backgroundColor: "#fcd34d",
                transform: "translate(-40px, -40px) rotate(45deg) scale(1)",
                transformOrigin: "center",
                transition:
                  "transform 0.5s ease, width 0.5s ease, height 0.5s ease",
                zIndex: 0,
                pointerEvents: "none", //it was stealing the hover and causing a glitching effect
              }}
            />
          </ImageWrapper>

          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              backgroundColor: "#1e1e1e",
              padding: 2,
              borderRadius: 1,
            }}
          >
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
  </Container>
);

// helper to swap between still & gif on hover
const HoverSwapImage: React.FC<{ still: string; gif: string }> = ({
  still,
  gif,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      component="img"
      src={hover ? gif : still}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      alt=""
      className="project-image"
      sx={{
        position: "relative",
        zIndex: 1,
      }}
    />
  );
};
