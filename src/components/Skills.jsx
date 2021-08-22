import React from "react";

// MUI
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Logos
import ReactLogo from "../logos/react.svg";
import CssLogo from "../logos/css.svg";
import DRFLogo from "../logos/djangrest.png";
import HtmlLogo from "../logos/html.svg";
import JsLogo from "../logos/js.svg";
import PythonLogo from "../logos/python.svg";
import SqlLogo from "../logos/sql.svg";
import DjangoLogo from "../logos/django.svg";
import GitLogo from "../logos/git.svg";
// Components
import Skill from "./Skill";

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

  noMobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Skills() {
  const classes = useStyles();
  const pythonDate = new Date("2020-08-17");
  const reactDate = new Date("2021-02-01");
  const logoNames = [
    {
      name: "React",
      logo: ReactLogo,
      date: reactDate,
      description:
        "I've constructed an entire frontend app from scratch, including responsive design, implementing a design with Material-Ui, creating custom components... ",
    },
    { name: "Django Rest Framework", logo: DRFLogo, date: reactDate },
    { name: "Django", logo: DjangoLogo, date: reactDate },
    { name: "Python", logo: PythonLogo, date: pythonDate },
    { name: "Javascript", logo: JsLogo, date: pythonDate },
    { name: "SQL", logo: SqlLogo },
    { name: "Git", logo: GitLogo },
    { name: "CSS", logo: CssLogo },
    { name: "HTML", logo: HtmlLogo },
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      className={classes.mainGrid}
    >
      <Grid
        item
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        direction="row"
        className={classes.tab}
      >
        {logoNames.map((logoObj) => (
          <Skill key={logoObj.name + "Object"} logoObj={logoObj} />
        ))}
      </Grid>
      <Grid item sm={false} md={1} className={classes.noMobile}></Grid>
    </Grid>
  );
}
