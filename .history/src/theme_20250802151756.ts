const getDesignTokens = (mode: PaletteMode) => {
  const isDark = mode === 'dark'

  const accentMain = '#fcd34d'

  return {
    palette: {
      mode,
      primary: {
        main: isDark ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: isDark ? '#f48fb1' : '#9c27b0',
      },
      accent: {
        main: accentMain,
        contrastText: '#000',
      },
      background: {
        default: isDark ? '#121212' : '#fafafa',
        paper: isDark ? '#1e1e1e' : '#fff',
      },
      text: {
        primary: isDark ? '#fff' : '#000',
      },
    },
    typography: {
      h1: {
        fontWeight: 700,
        fontFamily: "'Roboto Slab', serif",
      },
      h2: {
        fontWeight: 700,
        fontFamily: "'Roboto Slab', serif",
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            color: 'inherit',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: accentMain, // use local variable
            },
          },
        },
      },
    },
  }
}
