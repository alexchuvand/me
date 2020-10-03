import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Paper, Button } from "@material-ui/core";
import { commonStyle } from "./common-style";
import { timeline, educationTimeline } from "../data";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  ...commonStyle(theme),
  timeline: {
    flexGrow: "initial",
  },
  download: {
    color: "#fff",
  },
}));

export default function Experience() {
  const classes = useStyles();

  function downloadResume() {}

  return (
    <Box
      id="experience"
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.root}
    >
      <h1 className={classes.title}>Experience</h1>
      <Timeline className={classes.timeline} align="alternate">
        {timeline.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>{event.date}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <Typography variant="h6" component="h1">
                  {event.title}
                </Typography>
                <Typography>{event.company}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <h1 className={classes.title}>Education</h1>
      <Timeline className={classes.timeline} align="alternate">
        {educationTimeline.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>{event.date}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <Typography variant="h6" component="h1">
                  {event.title}
                </Typography>
                <Typography>{event.company}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Box>
        <Button variant="contained" onClick={downloadResume} color="primary">
          <a className={classes.download} href="/alex_resume.pdf" download>
            Download my resume
          </a>
        </Button>
      </Box>
    </Box>
  );
}
