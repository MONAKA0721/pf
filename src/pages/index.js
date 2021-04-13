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
import "fontsource-noto-sans-jp";
import "fontsource-noto-sans-jp/500.css";
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
    name: {
      fontFamily: [
        'Noto Sans JP',
        '"Tahoma"',
        'serif',
      ].join(','),
    },
    profile: {
      marginTop: 15,
      fontFamily: [
        'Noto Sans JP',
        'serif',
      ].join(','),
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
        secondary: "#A9A9A9",
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
        <Box my={9}>
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

      <Container maxWidth="sm">
        <Box mt={20}>
          <Typography color="textPrimary" variant="h3" component="h1" gutterBottom>
            ABOUT
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="sm" className={classes.heroContainer}>
        <StaticImage
          src="../images/profile.png"
          alt="Profile"
          formats={["png"]}
        />
      </Container>
      <Container maxWidth="sm">
        <Box my={5}>
          <Typography color="textPrimary" variant="h6" component="h1" className={classes.name} gutterBottom>
            モナカ | Yuya Sumie
          </Typography>
        </Box>
        <Box my={5}>
          <Typography color="textSecondary" variant="body1" component="h1" className={classes.profile} gutterBottom>
            1997/7/21 生まれ。奈良県出身。
          </Typography>
          <Typography color="textSecondary" variant="body1" component="h1" className={classes.profile} gutterBottom>
            京都大学大学院情報学研究科知能情報学専攻。
          </Typography>
          <Typography color="textSecondary" variant="body1" component="h1" className={classes.profile} gutterBottom>
            Golang, Ruby, Python などでバックエンドの開発を主に行っていますが、趣味のチーム開発ではフロントを書くこともしばしばあります。
          </Typography>
          <Typography color="textSecondary" variant="body1" component="h1" className={classes.profile} gutterBottom>
            パフォーマンス・チューニングが好きで社会人になってからもその領域で活躍したいと思っています。
          </Typography>
          <Typography color="textSecondary" variant="body1" component="h1" className={classes.profile} gutterBottom>
            趣味は旅行とスノボとスマブラ。
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default IndexPage
