import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Blogs from "./components/Blogs";
import { makeStyles } from "@material-ui/core/styles";

import { Fab } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  arrowIcon: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
  },
}));

function App() {
  const classes = useStyles();

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Experience></Experience>
      <Blogs></Blogs>
      <Fab color="primary" onClick={scrollToTop} className={classes.arrowIcon}>
        <ArrowUpwardIcon fontSize="large"></ArrowUpwardIcon>
      </Fab>
    </div>
  );
}

export default App;
