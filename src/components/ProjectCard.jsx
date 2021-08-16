import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: "85%", // 16:9
  },
}));

export default function ProjectCard({
  title,
  subheader,
  image,
  content,
  githubLink,
  projectLink,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={subheader ? subheader : null} />
      <CardMedia
        className={classes.media}
        image={image}
        title="Project image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {githubLink && (
          <Tooltip title="Github Repository">
            <IconButton
              href={githubLink}
              target="_blank"
              rel="noopener"
              aria-label="Github Repository"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        )}
        {projectLink && (
          <Tooltip title="Link to project">
            <IconButton
              href={projectLink}
              target="_blank"
              rel="noopener"
              aria-label="link to project"
            >
              <WebIcon />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
}
