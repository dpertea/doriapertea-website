import { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import { darkTheme } from "./theme";
import { Navbar } from "./components/NavBar";

//background
import Fireflies from "./components/background/Fireflies";

import { Home } from "./views/Home";
import { Contact } from "./views/Contact";
import { Resume } from "./views/Resume";
import { Projects } from "./views/Projects";

const AppContent = () => {
  //const theme = React.useContext(ThemeContext);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.8); // past the home section
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* Skip to main content link for keyboard users */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "absolute",
          left: "-9999px",
          zIndex: 9999,
          padding: "1rem",
          backgroundColor: "accent.main",
          color: "#000",
          textDecoration: "none",
          fontWeight: "bold",
          "&:focus": {
            left: "50%",
            top: "1rem",
            transform: "translateX(-50%)",
          },
        }}
      >
        Skip to main content
      </Box>
      <Navbar show={showNav} />

      <Box
        id="main-content"
        component="main"
        sx={{
          overflowY: "auto",

          height: "100%",
          width: "100%",
        }}
      >
        <Fireflies />
        <section id="home" style={{ height: "100vh", width: "100%" }}>
          <Home />
        </section>
        <section id="projects" style={{ height: "100%" }}>
          <Projects />
        </section>
        <section id="resume" style={{ height: "100%" }}>
          <Resume />
        </section>
        <section id="contact" style={{ height: "100%" }}>
          <Contact />
        </section>
      </Box>
    </ThemeProvider>
  );
};

const App = () => (
  <ThemeContextProvider>
    <AppContent />
  </ThemeContextProvider>
);

export default App;
