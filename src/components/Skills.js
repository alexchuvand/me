import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { commonStyle } from "./common-style";
import { techSkills, softSkills } from "../data";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  ...commonStyle(theme),
  skillsPaper: {
    margin: theme.spacing(1),
    width: theme.spacing(25),
    height: theme.spacing(16),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5em",
    textAlign: "center",
  },
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <Box
      id="skills"
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.root}
    >
      <h1 className={classes.title}>Technical Skills</h1>
      <Box display="flex" flexWrap="wrap" width="80%" justifyContent="center">
        {techSkills.map((i, index) => (
          <Paper className={classes.skillsPaper} key={index}>
            {i}
          </Paper>
        ))}
      </Box>
      <h1 className={classes.title}>Soft Skills</h1>
      <Box display="flex" flexWrap="wrap" width="80%" justifyContent="center">
        {softSkills.map((i, index) => (
          <Paper className={classes.skillsPaper} key={index}>
            {i}
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
