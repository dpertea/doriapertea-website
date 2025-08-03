// src/views/Resume.tsx
import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

export const Resume: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        My Resume
      </Typography>

      <Box
        component="iframe"
        src="/Doria_Pertea_Resume.pdf"
        width="100%"
        height="800px"
        sx={{
          border: "none",
          boxShadow: 3,
          mb: 3,
        }}
      />

      <Button
        variant="contained"
        href="/Resume.pdf"
        download
        sx={{
          backgroundColor: "accent.main",
          "&:hover": {
            backgroundColor: "accent.dark",
          },
        }}
      >
        Download PDF
      </Button>
    </Container>
  );
};
