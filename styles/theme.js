import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#333333"
    },
    secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

export default theme;