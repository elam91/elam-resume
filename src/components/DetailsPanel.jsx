import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Link,
  Typography,
  Paper,
  IconButton,
} from "@material-ui/core";
// Modules
import { toast } from "react-toastify";
import ReactRoundedImage from "react-rounded-image";
// Icons
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MyPhoto from "../images/me.jpg";

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
  accordionRoot: {
    width: "100%",
  },
  heading: {
    marginLeft: 10,
    paddingLeft: 5,
  },
  emailIcon: {
    marginRight: 5,
  },
}));

export default function DetailsPanel() {
  const classes = useStyles();
  const notify = () =>
    toast("Thank you for taking an interest!", {
      toastId: "only-display-once",
    });

  const getDiffInYears = (date1, date2) => {
    const diffInMs = Math.abs(date2 - date1);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return diffInDays / 365;
  };
  const birthDate = new Date("1991-11-05");
  const todayDate = new Date();

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={1}
          justifyContent="flex-start"
        >
          <Grid item className={classes.image}>
            <span style={{ alignItems: "center" }} onClick={notify}>
              <ReactRoundedImage
                roundedSize="5"
                roundedColor="#000000"
                image={MyPhoto}
                hoverColor="#fff"
              />
            </span>
            <Grid item>
              <Typography variant="h3">Elam Buteil</Typography>
              <Typography variant="h6" color="textSecondary">
                Full-Stack Web Developer
              </Typography>

              <Typography variant="h6" color="textSecondary">
                {Math.floor(getDiffInYears(birthDate, todayDate))} years old
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Haifa
              </Typography>

              <div className={classes.accordionRoot}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container spacing={2}>
                      <Grid item>
                        {" "}
                        <EmailIcon className={classes.emailIcon} />
                      </Grid>
                      <Grid item>
                        {" "}
                        <Typography className={classes.heading}>
                          Contact me
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container direction="column">
                      <Grid item>
                        <Link href="mailto:elam91@gmail.com">
                          elam91@gmail.com
                        </Link>
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
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
