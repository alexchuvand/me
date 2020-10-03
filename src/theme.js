import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

import SpaceMonoReg from "./fonts/SpaceMono-Regular.ttf";

// custom Font
const spacemono = {
  fontFamily: "Space Mono",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Space Mono'),
    url(${SpaceMonoReg}) format('truetype')
  `,
};

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Space Mono", '"Helvetica Neue"', "Arial", "sans-serif"],
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [spacemono],
      },
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
