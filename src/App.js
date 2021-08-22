import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import Skills from "./components/Skills";
import EducationWorkGrid from "./components/EducationWorkGrid";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";

//  MUI
import { createTheme, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import {
  Tab,
  Tabs,
  Box,
  Grid,
  CssBaseline,
  Typography,
  Avatar,
} from "@material-ui/core";
// Icons
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import EmailIcon from "@material-ui/icons/Email";
import FaceIcon from "@material-ui/icons/Face";
import CodeIcon from "@material-ui/icons/Code";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import DetailsPanel from "./components/DetailsPanel";

// Logos and images
import MyPhoto from "./images/me.jpg";

export const theme = createTheme({
  palette: {
    type: "dark",

    primary: {
      light: "#404040",
      main: "#ffffff",
      dark: "#404040",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#404040",
      main: "#404040",
      dark: "#121212",
      contrastText: "#b3b3b3",
    },
    action: {
      disabledBackground: "#121212",
      disabled: "#404040",
    },

    background: {
      default: "#121212",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: ["Maven Pro", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "121212",
    justify: "center",
    fontFamily: "Maven Pro",
  },
  div: {
    backgroundColor: "#181818",
    marginRight: "5px",
    marginLeft: "5px",
  },
  logo: {
    maxWidth: "100%",
    maxHeight: "80px",
  },
  card: {
    width: "20%",
    height: "20%",
    marginTop: 10,
    marginLeft: 0,
  },
  tabPanel: {
    width: "100%",
  },
  tab: {
    minWidth: 50,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
  },
  mainGrid: {},
  paper: {
    height: "88vh",
    marginLeft: 10,
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    marginTop: 10,
  },
  detailsContainer: {
    marginTop: 5,
  },
  mobileOnly: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  noMobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  accordionRoot: {
    width: "100%",
  },
  heading: {
    // marginLeft: 10,
    // paddingLeft: 5,
  },
  emailIcon: {
    marginRight: 5,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const getDiffInYears = (date1, date2) => {
    const diffInMs = Math.abs(date2 - date1);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return diffInDays / 365;
  };
  const birthDate = new Date("1991-11-05");
  const todayDate = new Date();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.div}>
          <ToastContainer />
          <Tabs
            value={value}
            className={classes.root}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            variant="fullWidth"
          >
            <Tab className={classes.tab} icon={<FaceIcon />} label="About Me" />
            <Tab
              className={classes.tab}
              icon={<SchoolIcon />}
              label="Education & Work"
            />
            <Tab className={classes.tab} icon={<CodeIcon />} label="Skills" />
            <Tab
              className={classes.tab}
              icon={<WorkIcon />}
              label="Experience"
            />
          </Tabs>
        </div>

        <Grid container className={classes.detailsContainer}>
          <Grid
            className={classes.mobileOnly}
            item
            container
            sm={12}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              container
              alignItems="center"
              justifyContent="center"
              xs={12}
            >
              <Grid item xs={2} />
              <Grid item xs={2}>
                <Avatar style={{ alignSelf: "center" }} src={MyPhoto}></Avatar>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1">Elam Buteil</Typography>
                <Typography variant="body2" color="textSecondary">
                  Full-Stack Web Developer
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {Math.floor(getDiffInYears(birthDate, todayDate))} years old,
                  Haifa
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              spacing={2}
              justifyContent="center"
              className={classes.socialLinks}
            >
              <Grid item>
                <IconButton
                  href="https://www.linkedin.com/in/elam-buteil-81738317b/"
                  target="_blank"
                  rel="noopener"
                  aria-label="link to project"
                >
                  <LinkedInIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://twitter.com/1queerjew"
                  target="_blank"
                  rel="noopener"
                  aria-label="link to project"
                >
                  <TwitterIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="mailto:elam91@gmail.com"
                  target="_blank"
                  rel="noopener"
                  aria-label="link to project"
                >
                  <EmailIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={false} md={2}>
            <DetailsPanel />
          </Grid>
          <Grid item sm={false} md={1} className={classes.noMobile}></Grid>
          <Grid item sm={12} md={8}>
            <TabPanel value={value} index={0}>
              <AboutMe />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <EducationWorkGrid />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
              <Skills />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Experience />
            </TabPanel>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
