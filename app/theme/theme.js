// theme.js
import { createTheme } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#367167', 
    },
    secondary: {
      main: '#f44336',
    },
 }
});

export default theme;