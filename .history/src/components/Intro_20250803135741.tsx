import React from "react";
import { Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextDecryptEffect from "./TextDecryptEffect";
import { useTheme } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const buildValues = ["Experiences", "Workflows", "Automations", "Tools"];

const AnimatedContainer = styled(Container)(({ theme }) => ({
  animation: "slideInLeft 1.8s ease-out forwards",
  opacity: 0,
  background: theme.palette.background.default,
  textAlign: "center", // default for mobile

  "@media (min-width:600px)": {
    textAlign: "left", // switch to left-aligned on sm+
  },
  "@keyframes slideInLeft": {
    from: {
      transform: "translateX(500px)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
}));

export const Intro: React.FC = () => {
  const theme = useTheme();
  return (
    <AnimatedContainer maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Hi, I'm Doria
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          opacity: 0,
          animation: "fadeIn 0.8s ease-out 1.7s forwards",
          "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      >
        and I like to build
        <br /> <TextDecryptEffect textValues={buildValues} />
      </Typography>
      {/*href="/DoriaPerteaResume.pdf"*/}
      <Button
        component="a"
        variant="outline"
        endIcon={<ArrowDownwardIcon />}
        sx={{
          mt: 3,

          "&:hover": {
            backgroundColor: "accent.dark",
          },
          color: "accent.main",
        }}
      >
        See My Work
      </Button>
    </AnimatedContainer>
  );
};
