import AppBar from "@material-ui/core/AppBar";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme, createStyles, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { StaticImage } from "gatsby-plugin-image";
import * as React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      justifyContent: "flex-end",
    },
    heroContainer: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  })
);

const IndexPage = () => {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#191919",
      },
      background: {
        default: "#212121",
      },
      text: {
        primary: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: [
        '"Times"',
        'serif',
      ].join(','),
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={12}>
          <Typography color="textPrimary" variant="h3" component="h1" gutterBottom>
            Yuya Sumie
          </Typography>
          <Typography color="textPrimary" variant="h5" component="h1" gutterBottom>
            - Portfolio Site -
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="sm" className={classes.heroContainer}>
        <StaticImage
          src="../images/hero.png"
          alt="Snow landscape"
          formats={["png"]}
        />
      </Container>
      <Container>
        <Box mt={9}>
          <Grid container justify="center">
            <Grid item>
              <StaticImage
                src="../images/expandMore.png"
                alt="Expand more"
                formats={["png"]}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default IndexPage
