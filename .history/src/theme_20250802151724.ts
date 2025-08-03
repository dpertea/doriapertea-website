import { createTheme, responsiveFontSizes, type Theme } from '@mui/material/styles'
import { type PaletteMode } from '@mui/material'
//import { deepmerge } from '@mui/utils'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary']
  }
}

const getDesignTokens = (mode: PaletteMode) => {
  const isDark = mode === 'dark'

  return {
    palette: {
      mode,
      accent: {
        main: '#fcd34d', // e.g. amber-300
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
            color: "inherit",
            textDecoration: "none",
            transition: "color 0.3s ease",
            "&:hover": {
              color: palette.accent.main, // hardcoded or use palette.accent.main if in theme file
            },
          },
        },
      },
    },
  }
}

export const createAppTheme = (mode: PaletteMode): Theme =>
  responsiveFontSizes(createTheme(getDesignTokens(mode)))

export const lightTheme = createAppTheme('light')
export const darkTheme = createAppTheme('dark')