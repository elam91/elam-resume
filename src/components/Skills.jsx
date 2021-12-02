import React, { useEffect, useState } from "react";
import Airtable from "airtable";

// MUI
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    const fetchRecords = () => {
      const airtableAPIKey = process.env.REACT_APP_AIRTABLE_API_KEY;
      const airtableBaseKey = process.env.REACT_APP_AIRTABLE_BASE_KEY;
      let tempSkillList = [];
      const base = new Airtable({ apiKey: airtableAPIKey }).base(
        airtableBaseKey
      );
      base("Skills")
        .select({
          maxRecords: 20,
          view: "Grid view",
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(function (record) {
              tempSkillList.push(record.fields);
            });

            fetchNextPage();
          },
          function done(err) {
            setSkillList(tempSkillList);
            if (err) {
              console.error(err);
              return;
            }
          }
        );
    };
    fetchRecords();
  }, []);

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
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
        direction="row"
        className={classes.tab}
      >
        {skillList.map((logoObj) => (
          <Skill key={logoObj.name + "Object"} logoObj={logoObj} />
        ))}
      </Grid>
      <Grid item sm={false} md={1} className={classes.noMobile}></Grid>
    </Grid>
  );
}
