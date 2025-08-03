// src/App.tsx
import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import { lightTheme, darkTheme } from "./theme"; // customize this
import { Layout } from "./components/Layout";

import { Home } from "./views/Home";
const Resume = lazy(() => import("./views/Resume"));
const PageNotFound = lazy(() => import("./views/PageNotFound"));

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Resume />} />
              <Route path="/projects" element={<Resume />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
};

export default App;
