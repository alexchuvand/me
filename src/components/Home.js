import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import image from "./alex_avatar.png";
import { Box, Fab, Typography } from "@material-ui/core";
import { commonStyle } from "./common-style";
import { description, title } from "../data";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  title: commonStyle(theme).title,
  root: {
    flexGrow: 1,
    minHeight: "calc(100vh - 48px)",
    padding: theme.spacing(1),
  },
  homeImage: {
    height: theme.spacing(40),
    width: theme.spacing(40),
  },
  homeDetails: {
    padding: theme.spacing(4),
  },
  homeDesc: {
    maxWidth: "400px",
  },
  homeIcons: {
    marginTop: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.root}
    >
      <h1 className={classes.title}>{title}</h1>
      <Box display="flex" flexWrap="wrap" flexGrow="1" alignItems="center">
        <Avatar className={classes.homeImage} alt="Alex Chuvand" src={image} />
        <div className={classes.homeDetails}>
          <div className={classes.homeDesc}>{description}</div>
          <Box className={classes.homeCont}></Box>
          <Typography variant="h6" color="primary">
            Contact Me
          </Typography>
          <Typography color="primary">
            Phone: 0410104754 / Email: alex.chuvand@gmail.com
          </Typography>
          <Box
            display="flex"
            className={classes.homeIcons}
            justifyContent="space-around"
          >
            <Fab
              color="primary"
              component="a"
              href="https://github.com/alexchuvand"
              target="_blank"
            >
              <GitHubIcon />
            </Fab>
            <Fab
              color="primary"
              component="a"
              href="https://www.linkedin.com/in/alexchuv/"
              target="_blank"
            >
              <LinkedInIcon />
            </Fab>
            <Fab
              color="primary"
              component="a"
              href="https://twitter.com/chuvand"
              target="_blank"
            >
              <TwitterIcon />
            </Fab>
          </Box>
        </div>
      </Box>
    </Box>
  );
}
