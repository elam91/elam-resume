import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  popPaper: {
    maxWidth: "25%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90vw",
    },
  },
}));

export default function SkillPopover({ anchor, onClose, content, ...rest }) {
  const classes = useStyles();

  const open = Boolean(anchor);
  const id = open ? "skill-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        classes={{ paper: classes.popPaper }}
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
        {...rest}
      >
        <Typography noWrap={false} className={classes.typography}>
          {content}
        </Typography>
      </Popover>
    </div>
  );
}
