import React from "react";
import { Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextDecryptEffect from "./TextDecryptEffect";
//import Resume from "../../settings/resume.json";

const buildValues = ["Experiences", "Workflows", "Automations"];

const AnimatedContainer = styled(Container)(() => ({
  animation: "slideInLeft 1.8s ease-out forwards",
  opacity: 0,
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
    </AnimatedContainer>
  );
};
