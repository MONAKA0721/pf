import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import "fontsource-noto-sans-jp";
import "fontsource-noto-sans-jp/500.css";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import {
  localePath,
  LocaleContext,
  localize,
  LOCALES,
  storeLocale,
} from "../i18n";
import { ui } from "../i18n/translations";
import Career from "./career";
import Posts from "./posts";
import Works from "./works";

const SITE_URL = "https://mo7ka.com";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      justifyContent: "flex-end",
    },
    drawerToolbar: {
      justifyContent: "flex-end",
      backgroundColor: "#000",
    },
    languageLink: {
      fontFamily: ["Noto Sans JP", "serif"].join(","),
      color: "#FFF",
      textDecoration: "none",
      fontSize: "0.9rem",
      marginRight: theme.spacing(2),
      "&:hover": {
        textDecoration: "underline",
      },
    },
    heroContainer: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    name: {
      fontFamily: ["Noto Sans JP", '"Tahoma"', "serif"].join(","),
    },
    profile: {
      marginTop: 15,
      fontFamily: ["Noto Sans JP", "serif"].join(","),
    },
    link: {
      fontFamily: ['"Arial"', "serif"].join(","),
      "& > * + *": {
        marginLeft: theme.spacing(4),
      },
      marginBottom: theme.spacing(3),
      fontSize: 24,
    },
    bambooooLink: {
      fontFamily: ['"Arial"', "serif"].join(","),
      fontSize: 24,
    },
    list: {
      width: "auto",
      backgroundColor: "#000",
    },
    iconButton: {
      color: "#FFF",
    },
    listItem: {
      textAlign: "center",
      display: "inline-block",
    },
    sectionLink: {
      textDecoration: "none",
      color: "inherit",
    },
  }),
);

const Home = ({ locale }) => {
  const classes = useStyles();
  const t = (value) => localize(value, locale);
  const otherLocale = LOCALES.find((l) => l !== locale);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#191919",
      },
      secondary: {
        main: "#A38F48",
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
      fontFamily: ['"Times"', "serif"].join(","),
    },
    overrides: {
      MuiTimelineItem: {
        missingOppositeContent: {
          "&:before": {
            flex: 0,
          },
        },
      },
      MuiCard: {
        root: {
          backgroundColor: "#3E3E3E",
        },
      },
      MuiListItemText: {
        primary: {
          fontSize: "2rem",
        },
      },
    },
  });

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  return (
    <LocaleContext.Provider value={locale}>
      <ThemeProvider theme={theme}>
        <Helmet>
          <html lang={locale} />
          <meta charset="utf-8" />
          <title>{ui.siteTitle}</title>
          <meta name="description" content={ui.siteDescription} />
          <link rel="canonical" href={SITE_URL + localePath(locale)} />
          {LOCALES.map((l) => (
            <link
              key={l}
              rel="alternate"
              hreflang={l}
              href={SITE_URL + localePath(l)}
            />
          ))}
          <link rel="alternate" hreflang="x-default" href={SITE_URL + "/"} />

          <meta property="og:image" content={SITE_URL + "/ogp.png"} />
          <meta property="og:url" content={SITE_URL + localePath(locale)} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={ui.siteTitle} />
          <meta property="og:site_name" content={ui.siteTitle} />
          <meta property="og:description" content={ui.siteDescription} />
          <meta
            property="og:locale"
            content={locale === "ja" ? "ja_JP" : "en_US"}
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@monaka_0721" />
        </Helmet>
        <CssBaseline />
        <AppBar position="sticky">
          <Toolbar className={classes.toolbar}>
            <GatsbyLink
              to={localePath(otherLocale)}
              className={classes.languageLink}
              aria-label={t(ui.switchLanguageAria)}
              hrefLang={otherLocale}
              onClick={() => storeLocale(otherLocale)}
            >
              {t(ui.languageLabel)}
            </GatsbyLink>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
          <Toolbar className={classes.drawerToolbar}>
            <IconButton
              onClick={toggleDrawer(false)}
              className={classes.iconButton}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <div
            className={classes.list}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
            onClick={toggleDrawer(false)}
          >
            <List>
              {ui.nav.map((text) => (
                <ListItem button key={text} className={classes.listItem}>
                  <a href={"#" + text} className={classes.sectionLink}>
                    <ListItemText primary={text} />
                  </a>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>

        <Container maxWidth="sm" id="TOP">
          <Box id="TOP" mb={12}>
            &ensp;
          </Box>
          <Box mb={12}>
            <Typography
              color="textPrimary"
              variant="h3"
              component="h1"
              gutterBottom
            >
              Yuya Sumie
            </Typography>
            <Typography
              color="textPrimary"
              variant="h5"
              component="h1"
              gutterBottom
            >
              {ui.subtitle}
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
                <a href="#ABOUT">
                  <StaticImage
                    src="../images/expandMore.png"
                    alt="Expand more"
                    formats={["png"]}
                  />
                </a>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Container maxWidth="sm">
          <Box id="ABOUT" mt={14}>
            &ensp;
          </Box>
          <Box mt={6}>
            <Typography
              color="textPrimary"
              variant="h3"
              component="h1"
              gutterBottom
            >
              ABOUT
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="sm" className={classes.heroContainer}>
          <StaticImage
            src="../images/profile.jpg"
            alt="Profile"
            formats={["png"]}
          />
        </Container>
        <Container maxWidth="sm">
          <Box my={5}>
            <Typography
              color="textPrimary"
              variant="h6"
              component="h1"
              className={classes.name}
              gutterBottom
            >
              {t(ui.name)}
            </Typography>
          </Box>
          <Box my={5}>
            {ui.about.map((paragraph, i) => (
              <Typography
                key={i}
                color="textSecondary"
                variant="body1"
                component="h1"
                className={classes.profile}
                gutterBottom
              >
                {t(paragraph)}
              </Typography>
            ))}
          </Box>
        </Container>

        <Career />

        <Container maxWidth="sm">
          <Box id="LINKS" mt={14}>
            &ensp;
          </Box>
          <Box mt={6}>
            <Typography
              color="textPrimary"
              variant="h3"
              component="h1"
              gutterBottom
            >
              LINKS
            </Typography>
          </Box>
          <Box mt={5}>
            <Grid container className={classes.link} alignItems="center">
              <Grid item>
                <StaticImage
                  src="../images/github.png"
                  alt="GitHub logo"
                  width={70}
                  formats={["png"]}
                />
              </Grid>
              <Grid item>
                <Link
                  href="https://github.com/MONAKA0721"
                  target="_blank"
                  rel="noopener"
                  color="textPrimary"
                  underline="always"
                >
                  @MONAKA0721
                </Link>
              </Grid>
            </Grid>
            <Grid container className={classes.link} alignItems="center">
              <Grid item>
                <StaticImage
                  src="../images/twitter.png"
                  alt="Twitter logo"
                  width={70}
                  formats={["png"]}
                />
              </Grid>
              <Grid item>
                <Link
                  href="https://mobile.twitter.com/monaka_0721"
                  target="_blank"
                  rel="noopener"
                  color="textPrimary"
                  underline="always"
                >
                  @monaka_0721
                </Link>
              </Grid>
            </Grid>
            <Grid container className={classes.link} alignItems="center">
              <Grid item>
                <StaticImage
                  src="../images/instagram.png"
                  alt="Instagram logo"
                  width={70}
                  formats={["png"]}
                />
              </Grid>
              <Grid item>
                <Link
                  href="https://www.instagram.com/yuyasumie/"
                  target="_blank"
                  rel="noopener"
                  color="textPrimary"
                  underline="always"
                >
                  @yuyasumie
                </Link>
              </Grid>
            </Grid>
            <Grid container className={classes.link} alignItems="center">
              <Grid item>
                <StaticImage
                  src="../images/wantedly.png"
                  alt="Wantedly logo"
                  width={70}
                  formats={["png"]}
                />
              </Grid>
              <Grid item>
                <Link
                  href="https://www.wantedly.com/id/monaka0721"
                  target="_blank"
                  rel="noopener"
                  color="textPrimary"
                  underline="always"
                >
                  @monaka0721
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box my={10}>
            <Grid
              container
              className={classes.bambooooLink}
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <StaticImage
                  src="../images/bamboooo.png"
                  alt="bamboooo logo"
                  width={100}
                  formats={["png"]}
                />
              </Grid>
              <Grid item>
                <Link
                  href="https://bamboooo.net"
                  target="_blank"
                  rel="noopener"
                  color="textPrimary"
                  underline="always"
                >
                  https://bamboooo.net
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Works />

        <Posts />
      </ThemeProvider>
    </LocaleContext.Provider>
  );
};

export default Home;
