import React from "react";
import { Tooltip, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SkillPopover from "./common/SkillPopover";
import XpMoment from "./XpMoment";

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

export default function Skill({ logoObj }) {
  const [anchorPop, setAnchorPop] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorPop(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorPop(null);
  };
  return (
    <Tooltip
      style={
        logoObj.description ? { cursor: "pointer" } : { cursor: "default" }
      }
      placement="top"
      title={logoObj.description ? "Click for more details" : ""}
    >
      <Grid xs={6} md={4} item className={classes.card}>
        <img
          alt={logoObj.name}
          src={logoObj.logo}
          title={logoObj.name}
          className={classes.logo}
          onClick={handleClick}
        />
        {logoObj.description && (
          <SkillPopover
            anchor={anchorPop}
            onClose={handleClose}
            content={logoObj.description ? logoObj.description : null}
          />
        )}
        <Typography gutterBottom component="div" variant="h5">
          {logoObj.name}
        </Typography>
        <Typography gutterBottom color="secondary" component="div" variant="h6">
          {logoObj.date ? <XpMoment date={logoObj.date} /> : null}
        </Typography>
      </Grid>
    </Tooltip>
  );
}
