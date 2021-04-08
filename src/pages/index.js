import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import * as React from "react";

// markup
const IndexPage = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#b6ffff',
        main: '#81d4fa',
        dark: '#4ba3c7',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#ff93c1',
        main: '#ef6091',
        dark: '#b92a64',
        contrastText: '#000000',
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            example
          </Typography>
          <Link to="/about">
            Go to the about page
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default IndexPage
