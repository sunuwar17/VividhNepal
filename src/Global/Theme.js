import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({

    palette: {
  
      // primary color
      primary: {
        main: '#2B7A0B',
        contrastText: "#fff"
      },
  
      // secondary color
      secondary: {
        main: '#7DCE13',
        contrastText: "#fff"
      },
  
      // red color
      error: {
        main: '#FF7D7D'
      },
  
      // grey color
      info: {
        main: '#9a9a9a'
      },
  
      // success color
      success: {
        main: '#2bde00'
      },
  
      // custom color
      custom: {
        main: '#d4ebff'
      }
    }
  });

  export default customTheme;