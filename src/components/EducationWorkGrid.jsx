import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  row: {
    backgroundColor: "#282828",
    padding: "5 5 5 0",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      paddingTop: 5,
    },
  },
  cell: {
    padding: 2,
    marginLeft: 5,
    marginTop: 4,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  container: {
    width: "100%",
  },
  divider: {
    minHeight: 15,
    marginTop: 5,
    backgroundColor: "#121212",
  },
}));

export default function EducationWorkGrid() {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item className={classes.row} md={9} xs={12} container>
        <Grid item className={classes.cell} md={2} xs={12}>
          <Typography align="left" variant="h6">
            Education
          </Typography>
        </Grid>
        <Grid item className={classes.divider} />
        <Grid item className={classes.cell} md={5} xs={12}>
          <Typography align="left" variant="body1">
            Bachelor of Education (B. Ed.)
            <br />
          </Typography>
          <Typography color="textSecondary" align="left" variant="body2">
            Beit Berl College
            <br />4 Years
          </Typography>
        </Grid>
        <Grid item className={classes.cell} md={2} xs={12}>
          <Typography align="left" noWrap variant="body1">
            Graduated 2021
          </Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.row} md={9} xs={12} container>
        <Grid item className={classes.cell} md={2} xs={12}>
          <Typography align="left" variant="h6"></Typography>
        </Grid>
        <Grid item className={classes.cell} md={5} xs={12}>
          <Typography align="left" variant="body1">
            Python, React, Django courses
            <br />
          </Typography>
          <Typography align="left" color="textSecondary" variant="body2">
            Online
            <br />1 Year
          </Typography>
        </Grid>
        <Grid item className={classes.cell} md={2} xs={12}>
          <Typography align="left" variant="body1"></Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.divider} />
      <Grid item className={classes.row} md={9} xs={12} container>
        <Grid item className={classes.cell} md={2} xs={12}>
          <Typography align="left" variant="h6">
            Work
          </Typography>
        </Grid>
        <Grid item className={classes.divider} />
        <Grid item className={classes.cell} md={5} xs={12}>
          <Typography align="left" variant="body1">
            Freelance Web Developer
            <br />
          </Typography>
          <Typography align="left" color="textSecondary" variant="body2">
            Website projects, full-stack React/Django Rest Framework websites.
          </Typography>
        </Grid>
        <Grid item className={classes.cell} md={2} xs={12}>
          <Typography align="left" variant="body1">
            Currently
          </Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.row} md={9} xs={12} container>
        <Grid item className={classes.cell} md={2} xs={12}>
          <Typography align="left" variant="h6"></Typography>
        </Grid>
        <Grid item className={classes.cell} md={5} xs={12}>
          <Typography align="left" variant="body1">
            Maintaining NOAL web apps
            <br />
          </Typography>
          <Typography align="left" color="textSecondary" variant="body2">
            Old systems built with python and javascript, mainly turbogears 2.
            <br />
            Diving into old code and implementing new features, fixing bugs.
          </Typography>
        </Grid>
        <Grid item className={classes.cell} md={2} xs={12}>
          <Typography align="left" variant="body1">
            2020 - Now
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
