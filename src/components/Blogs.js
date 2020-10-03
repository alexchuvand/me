import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { commonStyle } from "./common-style";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { blogs, canva } from "../data";

const useStyles = makeStyles((theme) => ({
  ...commonStyle(theme),
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Blogs() {
  const classes = useStyles();

  return (
    <Box
      id="blogs"
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.root}
    >
      <h1 className={classes.title}>Blogs / Others</h1>
      <Typography variant="h6" color="primary">
        Sharing my views on some topics
      </Typography>
      <List component="nav">
        {blogs.map((el, index) => {
          return (
            <ListItemLink key={index} href={el.url} target="_blank">
              <ListItemText primary={el.name} />
            </ListItemLink>
          );
        })}
      </List>
      <Typography variant="h6" color="primary">
        Canva Design
      </Typography>
      <List component="nav">
        <ListItemLink href={canva} target="_blank">
          <ListItemText primary="How to prepare an interview" />
        </ListItemLink>
      </List>
    </Box>
  );
}
