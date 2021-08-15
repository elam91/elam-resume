import "./App.css";
import React from "react";
import Moment from "react-moment";

//  MUI
import { createTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
// Icons
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import EmailIcon from "@material-ui/icons/Email";
import FaceIcon from "@material-ui/icons/Face";
import CodeIcon from "@material-ui/icons/Code";
// Logos
import ReactLogo from "./logos/react.svg";
import CssLogo from "./logos/css.svg";
import DRFLogo from "./logos/djangrest.png";
import HtmlLogo from "./logos/html.svg";
import JsLogo from "./logos/js.svg";
import PythonLogo from "./logos/python.svg";
import SqlLogo from "./logos/sql.svg";
import DjangoLogo from "./logos/django.svg";
import XpMoment from "./components/XpMoment";

const theme = createTheme({
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
      dark: "#404040",
      contrastText: "#ffffff",
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
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "121212",
    justify: "center",
  },
  div: {
    backgroundColor: "#181818",
  },
  logo: {
    height: "100px",
  },
  card: {
    width: "250px",
    height: "250px",
  },
  tab: {
    width: "100%",
  },
  mainGrid: {
    minHeight: "100vh",
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

  const pythonDate = new Date("2020-08-17");
  const reactDate = new Date("2021-02-01");
  const checkDate = new Date("2015-05-18");
  const logoNames = [
    { name: "React", logo: ReactLogo, date: reactDate },
    { name: "Django Rest Framework", logo: DRFLogo, date: reactDate },
    { name: "Django", logo: DjangoLogo, date: reactDate },
    { name: "Python", logo: PythonLogo, date: pythonDate },
    { name: "Javascript", logo: JsLogo, date: pythonDate },
    { name: "SQL", logo: SqlLogo },
    { name: "CSS", logo: CssLogo },
    { name: "HTML", logo: HtmlLogo },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.div}>
          <Tabs
            value={value}
            className={classes.root}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<FaceIcon />} label="About Me" />
            <Tab icon={<SchoolIcon />} label="Education" />
            <Tab icon={<CodeIcon />} label="Skills" />
            <Tab icon={<WorkIcon />} label="Experience" />
          </Tabs>
        </div>
        <TabPanel value={value} index={0}>
          About Me
        </TabPanel>
        <TabPanel value={value} index={1}>
          Education
        </TabPanel>
        <TabPanel className={classes.tab} value={value} index={2}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.mainGrid}
          >
            <Grid
              item
              container
              spacing={1}
              justifyContent="center"
              alignItems="flex-start"
              direction="row"
              className={classes.tab}
            >
              {logoNames.map((logoObj) => (
                <Grid
                  xs={2}
                  md={4}
                  key={logoObj.name + "Grid"}
                  item
                  className={classes.card}
                >
                  <img
                    alt={logoObj.name}
                    src={logoObj.logo}
                    title={logoObj.name}
                    className={classes.logo}
                  />
                  <Typography gutterBottom component="div" variant="h5">
                    {logoObj.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    variant="h7"
                    color="secondary"
                  >
                    {logoObj.date ? <XpMoment date={logoObj.date} /> : null}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          Experience
        </TabPanel>
      </ThemeProvider>
    </div>
  );
}

export default App;
