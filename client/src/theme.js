import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5a8b5c',
    },
    secondary: {
      main: '#81c784',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    typography: {
      fontFamily: [
       'Permanent Marker'
      ].join(','),
    },
  },
});

export default theme;