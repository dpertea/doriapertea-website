import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

const navLinks = [
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

export const Navbar: React.FC<{ show: boolean }> = ({ show }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      // Check if we're at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Find which section we're currently in
      let currentSection = "";

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = link.id;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        backgroundColor: "#121212",
        boxShadow: show ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
        transform: show ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        zIndex: 1000,
      }}
    >
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        {navLinks.map(({ label, id }) => {
          const isActive = activeSection === id;

          return (
            <Button
              key={label}
              onClick={() => scrollToSection(id)}
              disableRipple
              sx={{
                color: "text.primary",
                fontSize: "1rem",
                textTransform: "none",
                position: "relative",
                paddingBottom: "4px",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: isActive
                  ? "2px solid #fcd34d"
                  : "2px solid transparent",
                borderRadius: 0,
                backgroundColor: "transparent",
                outline: "none",
                boxShadow: "none",
                "&:hover": {
                  color: "accent.main",
                  backgroundColor: "transparent",
                  borderBottom: "2px solid #fcd34d !important",
                  boxShadow: "none",
                },
                "&:active": {
                  backgroundColor: "transparent",
                  outline: "none",
                  boxShadow: "none",
                },
                "&:focus": {
                  backgroundColor: "transparent",
                  outline: "none",
                  boxShadow: "none",
                },
                "&:focus-visible": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              {label}
            </Button>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};
