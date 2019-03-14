import { createMuiTheme } from '@material-ui/core';
import { lighten, rgbToHex } from '@material-ui/core/styles/colorManipulator';

export default createMuiTheme({
  palette: {
    primary: {
      dark: '#9e0808',
      main: rgbToHex(lighten('#9e0808', 0.1)),
      light: rgbToHex(lighten('#9e0808', 0.2)),
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeightMedium: 700,
    useNextVariants: true,
  },
});
