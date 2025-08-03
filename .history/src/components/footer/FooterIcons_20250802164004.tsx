import React from "react";
import { IconButton, Stack, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const FooterIcons: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ padding: "10px" }}
    >
      <Tooltip title="LinkedIn">
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/doria-pertea-20333220b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub">
        <IconButton
          component="a"
          href="https://github.com/dpertea"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};
