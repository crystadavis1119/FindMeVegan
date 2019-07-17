import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#383B38',
    },
    secondary: {
      main: '#93A388',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#E0E8DA',
    },
    typography: {
      fontFamily: [
       'Permanent Marker'
      ].join(','),
    },
  },
});

export default theme;