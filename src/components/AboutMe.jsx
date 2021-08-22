import { Typography } from "@material-ui/core";
import React from "react";
import AnimatedMe from "../images/meanimated.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "50%",
      transform: "scaleX(-1)",
    },
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div>
      <Typography align="left" variant="h2">
        Hi!
      </Typography>
      <Typography align="left" variant="h6">
        My name is Elam (עילם), and I'm looking for part time work as a
        full-stack or frontend developer. <br /> My main skills are React.js and
        Python, with an emphasis on DjangoRestFramework. <br />I am looking to
        expand my skills and learn and grow through work in web development,
        coding and programming,
        <br />
        <ul>
          <li>
            I am always eager to learn new programming languages, frameworks,
            libraries and work procedures.
          </li>
          <li>I am fluent in English and Hebrew.</li>
          <li>I am open to working from home, from Haifa, or from Tel Aviv.</li>
          <li>I am free for part time work for short or long term projects.</li>
          <li>I am very flexible and open minded.</li>
        </ul>
        You're welcome check out the rest of this résumé, see my skills and
        contact me.
      </Typography>
      <img className={classes.image} src={AnimatedMe} alt="me animated"></img>
    </div>
  );
}
