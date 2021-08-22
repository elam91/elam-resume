import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  popRoot: {
    maxWidth: "40%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
  },
}));

export default function SkillPopover({ anchor, onClose, content }) {
  const classes = useStyles();

  const open = Boolean(anchor);
  const id = open ? "skill-popover" : undefined;

  return (
    <div>
      <Popover
        className={classes.popRoot}
        id={id}
        open={open}
        anchorEl={anchor}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>{content}</Typography>
      </Popover>
    </div>
  );
}
