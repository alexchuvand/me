import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { menu } from "../data";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuBar: {
    display: "flex",
    justifyContent: "space-around",
  },
  menuLink: {
    textTransform: "capitalize",
    color: "white",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menuBar} variant="dense">
          <Link to="" onClick={scrollToTop} className={classes.menuLink}>
            Home
          </Link>
          {menu.map((section, index) => (
            <Link
              key={index}
              activeClass="active"
              smooth={true}
              to={section}
              className={classes.menuLink}
            >
              {section}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
